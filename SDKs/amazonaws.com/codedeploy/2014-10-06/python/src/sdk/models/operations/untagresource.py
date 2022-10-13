from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UntagResourceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_UNTAG_RESOURCE = "CodeDeploy_20141006.UntagResource"


@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UntagResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UntagResourceRequest:
    headers: UntagResourceHeaders = field(default=None)
    request: shared.UntagResourceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagResourceResponse:
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    arn_not_supported_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_tags_to_add_exception: Optional[Any] = field(default=None)
    resource_arn_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_required_exception: Optional[Any] = field(default=None)
    untag_resource_output: Optional[dict[str, Any]] = field(default=None)
    
