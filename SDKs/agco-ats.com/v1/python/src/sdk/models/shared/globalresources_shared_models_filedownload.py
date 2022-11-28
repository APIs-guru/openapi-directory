from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GlobalResourcesSharedModelsFileDownloadStateEnum(str, Enum):
    CREATED = "Created"
    AVAILABLE = "Available"
    REMOVED = "Removed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsFileDownload:
    r"""GlobalResourcesSharedModelsFileDownload
    A language used for string translations.
    """
    
    crc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CRC') }, 'form': { 'field_name': 'CRC' }})
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }, 'form': { 'field_name': 'ContentType' }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    is_public: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPublic') }, 'form': { 'field_name': 'IsPublic' }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }, 'form': { 'field_name': 'Path' }})
    state: GlobalResourcesSharedModelsFileDownloadStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }, 'form': { 'field_name': 'State' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }, 'form': { 'field_name': 'Size' }})
    
