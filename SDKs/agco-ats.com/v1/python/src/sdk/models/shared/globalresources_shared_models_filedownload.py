from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GlobalResourcesSharedModelsFileDownloadStateEnum(str, Enum):
    CREATED = "Created"
    AVAILABLE = "Available"
    REMOVED = "Removed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsFileDownload:
    crc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CRC' }, 'form': { 'field_name': 'CRC' }})
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }, 'form': { 'field_name': 'ContentType' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    is_public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPublic' }, 'form': { 'field_name': 'IsPublic' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }, 'form': { 'field_name': 'Path' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }, 'form': { 'field_name': 'Size' }})
    state: GlobalResourcesSharedModelsFileDownloadStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }, 'form': { 'field_name': 'State' }})
    
