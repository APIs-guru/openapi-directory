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
class UpdateSchemaInput:
    schema_id: SchemaID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    compatibility: Optional[CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compatibility') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    schema_version_number: Optional[SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
