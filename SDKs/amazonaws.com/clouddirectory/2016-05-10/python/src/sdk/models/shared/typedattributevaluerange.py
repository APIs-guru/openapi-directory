from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rangemode_enum
from . import typedattributevalue
from . import rangemode_enum
from . import typedattributevalue


@dataclass_json
@dataclass
class TypedAttributeValueRange:
    end_mode: rangemode_enum.RangeModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndMode' }})
    end_value: Optional[typedattributevalue.TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndValue' }})
    start_mode: rangemode_enum.RangeModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartMode' }})
    start_value: Optional[typedattributevalue.TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartValue' }})
    
