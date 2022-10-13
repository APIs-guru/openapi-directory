from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Compatibility:
    cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterVersion' }})
    default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersion' }})
    platform_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersions' }})
    
