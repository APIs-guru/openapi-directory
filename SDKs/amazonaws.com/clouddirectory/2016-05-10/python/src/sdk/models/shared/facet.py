from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Facet:
    r"""Facet
    A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href=\"http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html\">Facets</a> for more information.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    object_type: Optional[ObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectType') }})
    
