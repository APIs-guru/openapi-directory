from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tlsvalidationcontextfiletrust
from . import tlsvalidationcontextsdstrust


@dataclass_json
@dataclass
class ListenerTLSValidationContextTrust:
    file: Optional[tlsvalidationcontextfiletrust.TLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[tlsvalidationcontextsdstrust.TLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
