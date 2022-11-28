from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAggregationAuthorizationRequest:
    authorized_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAccountId') }})
    authorized_aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAwsRegion') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
