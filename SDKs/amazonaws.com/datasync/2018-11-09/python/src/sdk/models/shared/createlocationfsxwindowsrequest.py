from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationFsxWindowsRequest:
    fsx_filesystem_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FsxFilesystemArn') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    security_group_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupArns') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
