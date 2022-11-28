from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAliasOutput:
    r"""DescribeAliasOutput
    Represents the returned data in response to a request operation.
    """
    
    alias: Optional[Alias] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    
