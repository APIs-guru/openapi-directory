from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mounttargetdescription


@dataclass_json
@dataclass
class DescribeMountTargetsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    mount_targets: Optional[List[mounttargetdescription.MountTargetDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountTargets' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
