from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeSigningSignature:
    r"""CodeSigningSignature
    Describes the signature for a file.
    """
    
    inline_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineDocument') }})
    
