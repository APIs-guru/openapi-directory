from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceKeyword:
    r"""SourceKeyword
     The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. 
    """
    
    keyword_input_type: Optional[KeywordInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordInputType') }})
    keyword_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordValue') }})
    
