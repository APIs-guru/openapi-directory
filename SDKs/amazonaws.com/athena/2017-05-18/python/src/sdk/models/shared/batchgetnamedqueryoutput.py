from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetNamedQueryOutput:
    named_queries: Optional[List[NamedQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamedQueries') }})
    unprocessed_named_query_ids: Optional[List[UnprocessedNamedQueryID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedNamedQueryIds') }})
    
