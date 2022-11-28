from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InferenceAcceleratorOverride:
    r"""InferenceAcceleratorOverride
    Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html\">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    
