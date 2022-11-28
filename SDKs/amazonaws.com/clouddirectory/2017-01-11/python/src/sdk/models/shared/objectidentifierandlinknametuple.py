from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectIdentifierAndLinkNameTuple:
    r"""ObjectIdentifierAndLinkNameTuple
    A pair of ObjectIdentifier and LinkName.
    """
    
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    
