from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DescribeAuditSuppressionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DescribeAuditSuppressionRequestBodyResourceIdentifier:
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
class DescribeAuditSuppressionRequestBody:
    check_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkName' }})
    resource_identifier: DescribeAuditSuppressionRequestBodyResourceIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIdentifier' }})
    

@dataclass
class DescribeAuditSuppressionRequest:
    headers: DescribeAuditSuppressionHeaders = field(default=None)
    request: DescribeAuditSuppressionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAuditSuppressionResponse:
    content_type: str = field(default=None)
    describe_audit_suppression_response: Optional[shared.DescribeAuditSuppressionResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
