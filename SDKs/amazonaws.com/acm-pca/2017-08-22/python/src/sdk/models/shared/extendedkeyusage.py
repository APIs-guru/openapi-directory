from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import extendedkeyusagetype_enum


@dataclass_json
@dataclass
class ExtendedKeyUsage:
    extended_key_usage_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedKeyUsageObjectIdentifier' }})
    extended_key_usage_type: Optional[extendedkeyusagetype_enum.ExtendedKeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedKeyUsageType' }})
    
