from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SupportedFieldTypeDetails:
    r"""SupportedFieldTypeDetails
     Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
    """
    
    v1: FieldTypeDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1') }})
    
