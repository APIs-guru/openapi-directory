from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IndexAttachment:
    r"""IndexAttachment
    Represents an index and an attached object.
    """
    
    indexed_attributes: Optional[List[AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexedAttributes') }})
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    
