from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacetAttributeDefinition:
    r"""FacetAttributeDefinition
    A facet attribute definition. See <a href=\"https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html\">Attribute References</a> for more information.
    """
    
    type: FacetAttributeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    default_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    is_immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsImmutable') }})
    rules: Optional[dict[str, Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
