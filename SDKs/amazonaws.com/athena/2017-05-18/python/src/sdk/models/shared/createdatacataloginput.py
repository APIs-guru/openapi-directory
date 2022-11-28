from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataCatalogInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: DataCatalogTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
