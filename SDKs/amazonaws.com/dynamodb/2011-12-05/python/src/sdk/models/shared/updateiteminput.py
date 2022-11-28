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
class UpdateItemInput:
    attribute_updates: dict[str, AttributeValueUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    key: Key = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    expected: Optional[dict[str, ExpectedAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expected') }})
    return_values: Optional[ReturnValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnValues') }})
    
