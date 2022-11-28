from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceShadowEnrichActivity:
    r"""DeviceShadowEnrichActivity
    An activity that adds information from the IoT Device Shadow service to a message.
    """
    
    attribute: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    thing_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
