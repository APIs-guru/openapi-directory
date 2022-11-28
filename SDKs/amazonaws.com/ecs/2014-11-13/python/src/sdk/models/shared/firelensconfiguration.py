from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirelensConfiguration:
    r"""FirelensConfiguration
    The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html\">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    type: FirelensConfigurationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
