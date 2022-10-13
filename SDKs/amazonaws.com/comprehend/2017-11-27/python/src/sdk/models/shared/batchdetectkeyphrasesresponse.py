from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchitemerror
from . import batchdetectkeyphrasesitemresult


@dataclass_json
@dataclass
class BatchDetectKeyPhrasesResponse:
    error_list: List[batchitemerror.BatchItemError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorList' }})
    result_list: List[batchdetectkeyphrasesitemresult.BatchDetectKeyPhrasesItemResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultList' }})
    
