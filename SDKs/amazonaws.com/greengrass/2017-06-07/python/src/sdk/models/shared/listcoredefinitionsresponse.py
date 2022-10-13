from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import definitioninformation


@dataclass_json
@dataclass
class ListCoreDefinitionsResponse:
    definitions: Optional[List[definitioninformation.DefinitionInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definitions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
