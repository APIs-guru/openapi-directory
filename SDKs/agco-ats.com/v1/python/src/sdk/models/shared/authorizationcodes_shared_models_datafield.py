from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthorizationCodesSharedModelsDataFieldTypeEnum(str, Enum):
    BOOLEAN = "Boolean"
    DECIMAL = "Decimal"
    FLOAT = "Float"
    VARIABLE_LENGTH_BYTE_ARRAY = "VariableLengthByteArray"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsDataField:
    digits_precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitsPrecision' }})
    max_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxExponent' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_exponent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinExponent' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scale_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleFactor' }})
    signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signed' }})
    type: AuthorizationCodesSharedModelsDataFieldTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
