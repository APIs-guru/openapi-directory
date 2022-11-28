from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDeploymentPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    
class CreateDeploymentRequestBodyDeploymentTypeEnum(str, Enum):
    NEW_DEPLOYMENT = "NewDeployment"
    REDEPLOYMENT = "Redeployment"
    RESET_DEPLOYMENT = "ResetDeployment"
    FORCE_RESET_DEPLOYMENT = "ForceResetDeployment"


@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    deployment_type: CreateDeploymentRequestBodyDeploymentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    group_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupVersionId') }})
    

@dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = field()
    path_params: CreateDeploymentPathParams = field()
    request: CreateDeploymentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_deployment_response: Optional[shared.CreateDeploymentResponse] = field(default=None)
    
