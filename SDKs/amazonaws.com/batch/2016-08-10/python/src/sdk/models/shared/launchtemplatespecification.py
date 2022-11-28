from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchTemplateSpecification:
    r"""LaunchTemplateSpecification
    <p>An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
    """
    
    launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplateId') }})
    launch_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplateName') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
