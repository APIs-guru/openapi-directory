from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMlTransformsResponse:
    transforms: List[MlTransform] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transforms') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
