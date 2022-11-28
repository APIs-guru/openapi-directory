from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeNameAndValue:
    r"""AttributeNameAndValue
    Identifies the attribute name and value for a typed link.
    """
    
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    value: TypedAttributeValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
