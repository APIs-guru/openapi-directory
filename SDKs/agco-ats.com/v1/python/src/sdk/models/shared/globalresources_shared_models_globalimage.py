from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GlobalResourcesSharedModelsGlobalImageStateEnum(str, Enum):
    CREATED = "Created"
    AVAILABLE = "Available"
    REMOVED = "Removed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsGlobalImage:
    r"""GlobalResourcesSharedModelsGlobalImage
    An image from the Global Image library.
    """
    
    crc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CRC') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    state: GlobalResourcesSharedModelsGlobalImageStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    thumbnail_crc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailCRC') }})
    width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    categories: Optional[List[GlobalResourcesSharedModelsGlobalImageCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publisher') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    thumbnail_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailSize') }})
    
