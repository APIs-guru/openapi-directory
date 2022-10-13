from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchitemerror
from . import batchdetectsentimentitemresult


@dataclass_json
@dataclass
class BatchDetectSentimentResponse:
    error_list: List[batchitemerror.BatchItemError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorList' }})
    result_list: List[batchdetectsentimentitemresult.BatchDetectSentimentItemResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultList' }})
    
