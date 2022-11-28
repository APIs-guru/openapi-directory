from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMatchmakingConfigurationsOutput:
    r"""DescribeMatchmakingConfigurationsOutput
    Represents the returned data in response to a request operation.
    """
    
    configurations: Optional[List[MatchmakingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
