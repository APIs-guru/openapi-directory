from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import prefixformat_enum
from . import prefixtype_enum


@dataclass_json
@dataclass
class PrefixConfig:
    prefix_format: Optional[prefixformat_enum.PrefixFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixFormat' }})
    prefix_type: Optional[prefixtype_enum.PrefixTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixType' }})
    
