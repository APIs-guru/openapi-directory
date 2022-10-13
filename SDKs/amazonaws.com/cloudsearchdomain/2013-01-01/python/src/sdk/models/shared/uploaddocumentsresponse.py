from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentservicewarning


@dataclass_json
@dataclass
class UploadDocumentsResponse:
    adds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adds' }})
    deletes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    warnings: Optional[List[documentservicewarning.DocumentServiceWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
