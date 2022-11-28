from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceUpdate:
    connection_configuration: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    
