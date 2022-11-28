from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
    """
    
    owner: OwnerEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    source_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIdentifier') }})
    source_details: Optional[List[SourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    
