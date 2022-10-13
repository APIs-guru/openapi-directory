from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eksinfo


@dataclass_json
@dataclass
class ContainerInfo:
    eks_info: Optional[eksinfo.EksInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eksInfo' }})
    
