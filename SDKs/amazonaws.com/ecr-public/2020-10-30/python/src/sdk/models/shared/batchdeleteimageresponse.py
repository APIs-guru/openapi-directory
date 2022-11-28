from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteImageResponse:
    failures: Optional[List[ImageFailure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    image_ids: Optional[List[ImageIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageIds') }})
    
