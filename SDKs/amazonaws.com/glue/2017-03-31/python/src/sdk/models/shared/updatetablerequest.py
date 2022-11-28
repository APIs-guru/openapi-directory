from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTableRequest:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    table_input: TableInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableInput') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    skip_archive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkipArchive') }})
    
