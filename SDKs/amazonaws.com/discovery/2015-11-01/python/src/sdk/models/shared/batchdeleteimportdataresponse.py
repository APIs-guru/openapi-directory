from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchdeleteimportdataerror


@dataclass_json
@dataclass
class BatchDeleteImportDataResponse:
    errors: Optional[List[batchdeleteimportdataerror.BatchDeleteImportDataError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
