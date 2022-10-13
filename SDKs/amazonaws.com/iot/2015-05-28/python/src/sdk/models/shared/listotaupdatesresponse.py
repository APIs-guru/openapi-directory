from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import otaupdatesummary


@dataclass_json
@dataclass
class ListOtaUpdatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    ota_updates: Optional[List[otaupdatesummary.OtaUpdateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdates' }})
    
