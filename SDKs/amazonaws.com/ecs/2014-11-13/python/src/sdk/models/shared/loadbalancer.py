from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoadBalancer:
    r"""LoadBalancer
    <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    target_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupArn') }})
    
