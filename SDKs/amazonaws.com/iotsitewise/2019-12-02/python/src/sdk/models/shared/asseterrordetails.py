from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetErrorDetails:
    r"""AssetErrorDetails
    Contains error details for the requested associate project asset action.
    """
    
    asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    code: AssetErrorCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
