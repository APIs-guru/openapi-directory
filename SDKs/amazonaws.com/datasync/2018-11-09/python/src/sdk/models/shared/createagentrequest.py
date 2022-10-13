from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taglistentry


@dataclass_json
@dataclass
class CreateAgentRequest:
    activation_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationKey' }})
    agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentName' }})
    security_group_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupArns' }})
    subnet_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetArns' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcEndpointId' }})
    
