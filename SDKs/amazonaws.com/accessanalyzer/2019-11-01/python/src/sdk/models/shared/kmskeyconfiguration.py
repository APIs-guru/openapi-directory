from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import kmsgrantconfiguration


@dataclass_json
@dataclass
class KmsKeyConfiguration:
    grants: Optional[List[kmsgrantconfiguration.KmsGrantConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grants' }})
    key_policies: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPolicies' }})
    
