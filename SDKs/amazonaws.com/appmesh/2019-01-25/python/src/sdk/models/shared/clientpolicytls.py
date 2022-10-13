from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clienttlscertificate
from . import tlsvalidationcontext


@dataclass_json
@dataclass
class ClientPolicyTLS:
    certificate: Optional[clienttlscertificate.ClientTLSCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce' }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    validation: tlsvalidationcontext.TLSValidationContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
