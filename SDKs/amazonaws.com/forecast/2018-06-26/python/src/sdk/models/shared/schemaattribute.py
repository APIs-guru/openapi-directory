from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaAttribute:
    r"""SchemaAttribute
    An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_type: Optional[AttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
