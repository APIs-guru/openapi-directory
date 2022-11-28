from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigIDResponse:
    r"""ConfigIDResponse
    <p/>
    """
    
    config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configArn') }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: Optional[ConfigCapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    
