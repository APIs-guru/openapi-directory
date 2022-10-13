from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import extendedkeyusagename_enum
from . import keyalgorithm_enum
from . import keyusagename_enum


@dataclass_json
@dataclass
class Filters:
    extended_key_usage: Optional[List[extendedkeyusagename_enum.ExtendedKeyUsageNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedKeyUsage' }})
    key_types: Optional[List[keyalgorithm_enum.KeyAlgorithmEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyTypes' }})
    key_usage: Optional[List[keyusagename_enum.KeyUsageNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyUsage' }})
    
