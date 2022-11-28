from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisassociateClientDeviceFromCoreDeviceErrorEntry:
    r"""DisassociateClientDeviceFromCoreDeviceErrorEntry
    Contains an error that occurs from a request to disassociate a client device from a core device. The <a href=\"https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html\">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
