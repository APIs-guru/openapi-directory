from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import crlconfiguration
from . import ocspconfiguration


@dataclass_json
@dataclass
class RevocationConfiguration:
    crl_configuration: Optional[crlconfiguration.CrlConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrlConfiguration' }})
    ocsp_configuration: Optional[ocspconfiguration.OcspConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OcspConfiguration' }})
    
