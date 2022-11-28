from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CsrExtensions:
    r"""CsrExtensions
    Describes the certificate extensions to be added to the certificate signing request (CSR).
    """
    
    key_usage: Optional[KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    subject_information_access: Optional[List[AccessDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectInformationAccess') }})
    
