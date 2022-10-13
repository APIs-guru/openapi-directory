from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apicachingbehavior_enum
from . import apicachestatus_enum
from . import apicachetype_enum


@dataclass_json
@dataclass
class APICache:
    api_caching_behavior: Optional[apicachingbehavior_enum.APICachingBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCachingBehavior' }})
    at_rest_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atRestEncryptionEnabled' }})
    status: Optional[apicachestatus_enum.APICacheStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transit_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitEncryptionEnabled' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: Optional[apicachetype_enum.APICacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
