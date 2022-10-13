from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerArtifactPaths:
    android_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidPaths' }})
    device_host_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceHostPaths' }})
    ios_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosPaths' }})
    
