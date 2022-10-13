from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import disassociateclientdevicefromcoredeviceerrorentry


@dataclass_json
@dataclass
class BatchDisassociateClientDeviceFromCoreDeviceResponse:
    error_entries: Optional[List[disassociateclientdevicefromcoredeviceerrorentry.DisassociateClientDeviceFromCoreDeviceErrorEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEntries' }})
    
