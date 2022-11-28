from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationEfsRequest:
    r"""CreateLocationEfsRequest
    CreateLocationEfsRequest
    """
    
    ec2_config: Ec2Config = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2Config') }})
    efs_filesystem_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFilesystemArn') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
