from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMicrosoftAdRequest:
    r"""CreateMicrosoftAdRequest
    Creates an Managed Microsoft AD directory.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    vpc_settings: DirectoryVpcSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    edition: Optional[DirectoryEditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edition') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
