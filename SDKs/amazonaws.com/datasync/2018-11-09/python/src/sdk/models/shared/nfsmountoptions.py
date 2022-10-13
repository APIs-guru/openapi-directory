from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nfsversion_enum


@dataclass_json
@dataclass
class NfsMountOptions:
    version: Optional[nfsversion_enum.NfsVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
