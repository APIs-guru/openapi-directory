from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceUnderTest:
    r"""DeviceUnderTest
    Lists all the devices under test
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingArn') }})
    
