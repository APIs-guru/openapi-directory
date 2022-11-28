from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeySchemaElement:
    r"""KeySchemaElement
    <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
    """
    
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_type: ScalarAttributeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
