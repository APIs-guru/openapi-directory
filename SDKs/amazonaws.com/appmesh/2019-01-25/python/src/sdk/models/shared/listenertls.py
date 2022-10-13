from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import listenertlscertificate
from . import listenertlsmode_enum
from . import listenertlsvalidationcontext


@dataclass_json
@dataclass
class ListenerTLS:
    certificate: listenertlscertificate.ListenerTLSCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    mode: listenertlsmode_enum.ListenerTLSModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    validation: Optional[listenertlsvalidationcontext.ListenerTLSValidationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
