from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisassociateClientDeviceFromCoreDeviceEntry:
    r"""DisassociateClientDeviceFromCoreDeviceEntry
    Contains a request to disassociate a client device from a core device. The <a href=\"https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html\">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
    """
    
    thing_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
