from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeSigningCertificateChain:
    r"""CodeSigningCertificateChain
    Describes the certificate chain being used when code signing a file.
    """
    
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    inline_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineDocument') }})
    
