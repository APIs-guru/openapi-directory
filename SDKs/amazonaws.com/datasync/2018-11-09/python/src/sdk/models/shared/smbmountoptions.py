from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import smbversion_enum


@dataclass_json
@dataclass
class SmbMountOptions:
    version: Optional[smbversion_enum.SmbVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
