from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import globalresources_shared_models_globalimagecategory

class GlobalResourcesSharedModelsGlobalImageStateEnum(str, Enum):
    CREATED = "Created"
    AVAILABLE = "Available"
    REMOVED = "Removed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsGlobalImage:
    crc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CRC' }})
    categories: Optional[List[globalresources_shared_models_globalimagecategory.GlobalResourcesSharedModelsGlobalImageCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    height: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publisher' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    state: GlobalResourcesSharedModelsGlobalImageStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    thumbnail_crc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailCRC' }})
    thumbnail_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailSize' }})
    width: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
