from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListAuditSuppressionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuditSuppressionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListAuditSuppressionsRequestBodyResourceIdentifier:
    r"""ListAuditSuppressionsRequestBodyResourceIdentifier
    Information that identifies the noncompliant resource.
    """
    
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    ca_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateId') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cognitoIdentityPoolId') }})
    device_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCertificateId') }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRoleArn') }})
    policy_version_identifier: Optional[shared.PolicyVersionIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyVersionIdentifier') }})
    role_alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleAliasArn') }})
    

@dataclass_json
@dataclass
class ListAuditSuppressionsRequestBody:
    ascending_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ascendingOrder') }})
    check_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkName') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_identifier: Optional[ListAuditSuppressionsRequestBodyResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIdentifier') }})
    

@dataclass
class ListAuditSuppressionsRequest:
    headers: ListAuditSuppressionsHeaders = field()
    query_params: ListAuditSuppressionsQueryParams = field()
    request: ListAuditSuppressionsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAuditSuppressionsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_audit_suppressions_response: Optional[shared.ListAuditSuppressionsResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
