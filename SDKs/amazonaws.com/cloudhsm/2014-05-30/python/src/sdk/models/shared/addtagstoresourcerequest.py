from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddTagsToResourceRequest:
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    tag_list: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
