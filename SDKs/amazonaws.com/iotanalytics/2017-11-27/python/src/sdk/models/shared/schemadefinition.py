from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaDefinition:
    r"""SchemaDefinition
    Information needed to define a schema.
    """
    
    columns: Optional[List[Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
