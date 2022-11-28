from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Device:
    r"""Device
    Information about a device.
    """
    
    certificate_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    thing_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThingArn') }})
    sync_shadow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncShadow') }})
    
