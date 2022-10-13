from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provider


@dataclass_json
@dataclass
class EncryptionConfig:
    provider: Optional[provider.Provider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
