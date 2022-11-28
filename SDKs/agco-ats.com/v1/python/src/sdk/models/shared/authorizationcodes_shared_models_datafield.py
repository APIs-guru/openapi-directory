from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorizationCodesSharedModelsDataFieldTypeEnum(str, Enum):
    BOOLEAN = "Boolean"
    DECIMAL = "Decimal"
    FLOAT = "Float"
    VARIABLE_LENGTH_BYTE_ARRAY = "VariableLengthByteArray"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsDataField:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: AuthorizationCodesSharedModelsDataFieldTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    digits_precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DigitsPrecision') }})
    max_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxExponent') }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinExponent') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    scale_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleFactor') }})
    signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signed') }})
    
