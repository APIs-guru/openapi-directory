from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoadBalancer:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPort' }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    target_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroupArn' }})
    
