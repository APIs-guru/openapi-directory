from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConfigResponse:
    r"""GetConfigResponse
    <p/>
    """
    
    config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configArn') }})
    config_data: ConfigTypeData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configData') }})
    config_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    config_type: Optional[ConfigCapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
