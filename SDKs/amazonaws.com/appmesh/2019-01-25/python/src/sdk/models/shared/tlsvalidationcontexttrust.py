from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tlsvalidationcontextacmtrust
from . import tlsvalidationcontextfiletrust
from . import tlsvalidationcontextsdstrust


@dataclass_json
@dataclass
class TLSValidationContextTrust:
    acm: Optional[tlsvalidationcontextacmtrust.TLSValidationContextAcmTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acm' }})
    file: Optional[tlsvalidationcontextfiletrust.TLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[tlsvalidationcontextsdstrust.TLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
