from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repositorytrigger


@dataclass_json
@dataclass
class GetRepositoryTriggersOutput:
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationId' }})
    triggers: Optional[List[repositorytrigger.RepositoryTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    
