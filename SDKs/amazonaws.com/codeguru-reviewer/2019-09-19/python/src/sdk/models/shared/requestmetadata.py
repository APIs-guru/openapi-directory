from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventinfo
from . import vendorname_enum


@dataclass_json
@dataclass
class RequestMetadata:
    event_info: Optional[eventinfo.EventInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventInfo' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    requester: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requester' }})
    vendor_name: Optional[vendorname_enum.VendorNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VendorName' }})
    
