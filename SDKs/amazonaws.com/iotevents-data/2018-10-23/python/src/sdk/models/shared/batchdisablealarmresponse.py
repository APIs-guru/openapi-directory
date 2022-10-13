from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchalarmactionerrorentry


@dataclass_json
@dataclass
class BatchDisableAlarmResponse:
    error_entries: Optional[List[batchalarmactionerrorentry.BatchAlarmActionErrorEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEntries' }})
    
