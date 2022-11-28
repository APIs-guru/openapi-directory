from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InferenceAccelerator:
    r"""InferenceAccelerator
    Details on a Elastic Inference accelerator. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html\">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    device_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    
