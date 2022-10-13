from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddTagsToOnPremisesInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"


@dataclass
class AddTagsToOnPremisesInstancesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddTagsToOnPremisesInstancesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddTagsToOnPremisesInstancesRequest:
    headers: AddTagsToOnPremisesInstancesHeaders = field(default=None)
    request: shared.AddTagsToOnPremisesInstancesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTagsToOnPremisesInstancesResponse:
    content_type: str = field(default=None)
    instance_limit_exceeded_exception: Optional[Any] = field(default=None)
    instance_name_required_exception: Optional[Any] = field(default=None)
    instance_not_registered_exception: Optional[Any] = field(default=None)
    invalid_instance_name_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_limit_exceeded_exception: Optional[Any] = field(default=None)
    tag_required_exception: Optional[Any] = field(default=None)
    
