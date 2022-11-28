from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalSecondaryIndex:
    r"""LocalSecondaryIndex
    Represents the properties of a local secondary index.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    key_schema: List[KeySchemaElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Projection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    
