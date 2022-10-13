from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyinformation
from . import extendedkeyusage
from . import keyusage
from . import generalname


@dataclass_json
@dataclass
class Extensions:
    certificate_policies: Optional[List[policyinformation.PolicyInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificatePolicies' }})
    extended_key_usage: Optional[List[extendedkeyusage.ExtendedKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedKeyUsage' }})
    key_usage: Optional[keyusage.KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsage' }})
    subject_alternative_names: Optional[List[generalname.GeneralName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectAlternativeNames' }})
    
