from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubjectAlternativeNames:
    r"""SubjectAlternativeNames
    An object that represents the subject alternative names secured by the certificate.
    """
    
    match: SubjectAlternativeNameMatchers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
