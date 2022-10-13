from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associateclientdevicewithcoredeviceerrorentry


@dataclass_json
@dataclass
class BatchAssociateClientDeviceWithCoreDeviceResponse:
    error_entries: Optional[List[associateclientdevicewithcoredeviceerrorentry.AssociateClientDeviceWithCoreDeviceErrorEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEntries' }})
    
