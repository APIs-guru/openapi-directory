from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engineversion


@dataclass_json
@dataclass
class ListEngineVersionsOutput:
    engine_versions: Optional[List[engineversion.EngineVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
