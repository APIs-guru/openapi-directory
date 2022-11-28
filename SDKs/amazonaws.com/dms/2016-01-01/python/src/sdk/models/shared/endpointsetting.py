from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointSetting:
    r"""EndpointSetting
    Endpoint settings.
    """
    
    applicability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applicability') }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    enum_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnumValues') }})
    int_value_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntValueMax') }})
    int_value_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntValueMin') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sensitive') }})
    type: Optional[EndpointSettingTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Units') }})
    
