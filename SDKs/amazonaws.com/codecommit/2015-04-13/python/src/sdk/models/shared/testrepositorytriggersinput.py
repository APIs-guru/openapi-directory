from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import repositorytrigger


@dataclass_json
@dataclass
class TestRepositoryTriggersInput:
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    triggers: List[repositorytrigger.RepositoryTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    
