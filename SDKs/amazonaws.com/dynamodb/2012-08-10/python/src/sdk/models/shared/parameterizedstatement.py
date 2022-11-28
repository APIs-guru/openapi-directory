from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterizedStatement:
    r"""ParameterizedStatement
     Represents a PartiQL statment that uses parameters. 
    """
    
    statement: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statement') }})
    parameters: Optional[List[AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
