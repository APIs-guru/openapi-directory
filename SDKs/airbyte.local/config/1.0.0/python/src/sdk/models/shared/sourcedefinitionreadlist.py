from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sourcedefinitionread


@dataclass_json
@dataclass
class SourceDefinitionReadList:
    source_definitions: List[sourcedefinitionread.SourceDefinitionRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinitions' }})
    
