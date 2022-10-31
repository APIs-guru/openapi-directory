from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListOnPremisesInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_ON_PREMISES_INSTANCES = "CodeDeploy_20141006.ListOnPremisesInstances"


@dataclass
class ListOnPremisesInstancesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListOnPremisesInstancesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOnPremisesInstancesRequest:
    headers: ListOnPremisesInstancesHeaders = field(default=None)
    request: shared.ListOnPremisesInstancesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOnPremisesInstancesResponse:
    content_type: str = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_registration_status_exception: Optional[Any] = field(default=None)
    invalid_tag_filter_exception: Optional[Any] = field(default=None)
    list_on_premises_instances_output: Optional[shared.ListOnPremisesInstancesOutput] = field(default=None)
    status_code: int = field(default=None)
    
