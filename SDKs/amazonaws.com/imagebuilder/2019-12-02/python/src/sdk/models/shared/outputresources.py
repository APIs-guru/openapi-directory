from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ami
from . import container


@dataclass_json
@dataclass
class OutputResources:
    amis: Optional[List[ami.Ami]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amis' }})
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    
