from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import extendedkeyusagename_enum


@dataclass_json
@dataclass
class ExtendedKeyUsage:
    name: Optional[extendedkeyusagename_enum.ExtendedKeyUsageNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OID' }})
    
