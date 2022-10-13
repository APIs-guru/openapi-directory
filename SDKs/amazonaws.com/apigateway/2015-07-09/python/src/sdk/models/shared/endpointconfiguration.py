from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointtype_enum


@dataclass_json
@dataclass
class EndpointConfiguration:
    types: Optional[List[endpointtype_enum.EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcEndpointIds' }})
    
