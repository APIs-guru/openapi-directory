from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAttachTypedLinkResponse:
    r"""BatchAttachTypedLinkResponse
    Represents the output of a <a>AttachTypedLink</a> response operation.
    """
    
    typed_link_specifier: Optional[TypedLinkSpecifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
