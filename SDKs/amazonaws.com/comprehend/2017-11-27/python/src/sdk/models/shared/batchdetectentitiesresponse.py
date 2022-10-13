from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchitemerror
from . import batchdetectentitiesitemresult


@dataclass_json
@dataclass
class BatchDetectEntitiesResponse:
    error_list: List[batchitemerror.BatchItemError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorList' }})
    result_list: List[batchdetectentitiesitemresult.BatchDetectEntitiesItemResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultList' }})
    
