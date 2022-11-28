from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeImagesResponse:
    image_details: Optional[List[ImageDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDetails') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
