from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetStatus:
    r"""AssetStatus
    Contains information about the current status of an asset. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html\">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    state: AssetStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    error: Optional[ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
