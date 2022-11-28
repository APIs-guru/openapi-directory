from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeKeyAndValue:
    r"""AttributeKeyAndValue
    The combination of an attribute key and an attribute value.
    """
    
    key: AttributeKey = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: TypedAttributeValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
