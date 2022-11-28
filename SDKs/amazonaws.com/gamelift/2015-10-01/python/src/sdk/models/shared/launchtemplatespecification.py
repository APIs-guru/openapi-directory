from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchTemplateSpecification:
    r"""LaunchTemplateSpecification
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>An EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group with <a>CreateGameServerGroup</a>. </p>
    """
    
    launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTemplateId') }})
    launch_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTemplateName') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
