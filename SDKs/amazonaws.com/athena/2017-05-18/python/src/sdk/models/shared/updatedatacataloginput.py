from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDataCatalogInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: DataCatalogTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
