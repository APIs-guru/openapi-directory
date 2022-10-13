from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associatedclientdevice


@dataclass_json
@dataclass
class ListClientDevicesAssociatedWithCoreDeviceResponse:
    associated_client_devices: Optional[List[associatedclientdevice.AssociatedClientDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedClientDevices' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
