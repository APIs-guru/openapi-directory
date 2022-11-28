from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectDirectoryRequest:
    r"""ConnectDirectoryRequest
    Contains the inputs for the <a>ConnectDirectory</a> operation.
    """
    
    connect_settings: DirectoryConnectSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectSettings') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    size: DirectorySizeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
