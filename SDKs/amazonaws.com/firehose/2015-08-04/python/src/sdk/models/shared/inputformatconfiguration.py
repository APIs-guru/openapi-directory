from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputFormatConfiguration:
    r"""InputFormatConfiguration
    Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
    """
    
    deserializer: Optional[Deserializer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deserializer') }})
    
