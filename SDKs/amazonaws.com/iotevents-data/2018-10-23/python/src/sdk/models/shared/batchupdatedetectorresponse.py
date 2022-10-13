from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchupdatedetectorerrorentry


@dataclass_json
@dataclass
class BatchUpdateDetectorResponse:
    batch_update_detector_error_entries: Optional[List[batchupdatedetectorerrorentry.BatchUpdateDetectorErrorEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchUpdateDetectorErrorEntries' }})
    
