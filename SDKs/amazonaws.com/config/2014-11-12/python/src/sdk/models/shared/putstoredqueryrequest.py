from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutStoredQueryRequest:
    stored_query: StoredQuery = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredQuery') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
