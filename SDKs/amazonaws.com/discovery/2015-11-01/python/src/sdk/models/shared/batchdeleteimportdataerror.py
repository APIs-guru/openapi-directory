from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchdeleteimportdataerrorcode_enum


@dataclass_json
@dataclass
class BatchDeleteImportDataError:
    error_code: Optional[batchdeleteimportdataerrorcode_enum.BatchDeleteImportDataErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    import_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importTaskId' }})
    
