from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAuditSuppressionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateAuditSuppressionRequestBodyResourceIdentifier:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    ca_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateId' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cognitoIdentityPoolId' }})
    device_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCertificateId' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRoleArn' }})
    policy_version_identifier: Optional[shared.PolicyVersionIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyVersionIdentifier' }})
    role_alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleAliasArn' }})
    

@dataclass_json
@dataclass
class UpdateAuditSuppressionRequestBody:
    check_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_identifier: UpdateAuditSuppressionRequestBodyResourceIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIdentifier' }})
    suppress_indefinitely: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressIndefinitely' }})
    

@dataclass
class UpdateAuditSuppressionRequest:
    headers: UpdateAuditSuppressionHeaders = field(default=None)
    request: UpdateAuditSuppressionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAuditSuppressionResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_audit_suppression_response: Optional[dict[str, Any]] = field(default=None)
    
