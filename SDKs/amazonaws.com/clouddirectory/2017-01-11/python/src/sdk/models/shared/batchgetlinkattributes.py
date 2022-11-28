from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetLinkAttributes:
    r"""BatchGetLinkAttributes
    Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    typed_link_specifier: TypedLinkSpecifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
