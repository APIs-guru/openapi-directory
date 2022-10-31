from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterOnPremisesInstanceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_REGISTER_ON_PREMISES_INSTANCE = "CodeDeploy_20141006.RegisterOnPremisesInstance"


@dataclass
class RegisterOnPremisesInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterOnPremisesInstanceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterOnPremisesInstanceRequest:
    headers: RegisterOnPremisesInstanceHeaders = field(default=None)
    request: shared.RegisterOnPremisesInstanceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterOnPremisesInstanceResponse:
    content_type: str = field(default=None)
    iam_arn_required_exception: Optional[Any] = field(default=None)
    iam_session_arn_already_registered_exception: Optional[Any] = field(default=None)
    iam_user_arn_already_registered_exception: Optional[Any] = field(default=None)
    iam_user_arn_required_exception: Optional[Any] = field(default=None)
    instance_name_already_registered_exception: Optional[Any] = field(default=None)
    instance_name_required_exception: Optional[Any] = field(default=None)
    invalid_iam_session_arn_exception: Optional[Any] = field(default=None)
    invalid_iam_user_arn_exception: Optional[Any] = field(default=None)
    invalid_instance_name_exception: Optional[Any] = field(default=None)
    multiple_iam_arns_provided_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
