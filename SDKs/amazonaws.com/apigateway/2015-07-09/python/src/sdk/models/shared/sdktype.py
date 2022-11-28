from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SDKType:
    r"""SDKType
    A type of SDK that API Gateway can generate.
    """
    
    configuration_properties: Optional[List[SDKConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationProperties') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
