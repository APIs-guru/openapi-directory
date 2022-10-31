from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAuditFindingsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuditFindingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListAuditFindingsRequestBodyResourceIdentifier:
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
class ListAuditFindingsRequestBody:
    check_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    list_suppressed_findings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listSuppressedFindings' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_identifier: Optional[ListAuditFindingsRequestBodyResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIdentifier' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    

@dataclass
class ListAuditFindingsRequest:
    query_params: ListAuditFindingsQueryParams = field(default=None)
    headers: ListAuditFindingsHeaders = field(default=None)
    request: ListAuditFindingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAuditFindingsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_audit_findings_response: Optional[shared.ListAuditFindingsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
