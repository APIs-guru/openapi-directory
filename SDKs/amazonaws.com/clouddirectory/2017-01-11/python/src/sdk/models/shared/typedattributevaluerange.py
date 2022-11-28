from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypedAttributeValueRange:
    r"""TypedAttributeValueRange
    A range of attribute values. For more information, see <a href=\"https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html\">Range Filters</a>.
    """
    
    end_mode: RangeModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndMode') }})
    start_mode: RangeModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartMode') }})
    end_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndValue') }})
    start_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartValue') }})
    
