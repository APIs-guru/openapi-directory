from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Extensions:
    r"""Extensions
    Contains X.509 extension information for a certificate.
    """
    
    certificate_policies: Optional[List[PolicyInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificatePolicies') }})
    extended_key_usage: Optional[List[ExtendedKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsage') }})
    key_usage: Optional[KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    subject_alternative_names: Optional[List[GeneralName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    
