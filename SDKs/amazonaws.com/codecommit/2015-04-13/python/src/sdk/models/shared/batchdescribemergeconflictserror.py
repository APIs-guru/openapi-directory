from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchDescribeMergeConflictsError:
    exception_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionName' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
