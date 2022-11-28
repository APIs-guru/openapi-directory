from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Processor:
    r"""Processor
    Describes a data processor.
    """
    
    type: ProcessorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    parameters: Optional[List[ProcessorParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
