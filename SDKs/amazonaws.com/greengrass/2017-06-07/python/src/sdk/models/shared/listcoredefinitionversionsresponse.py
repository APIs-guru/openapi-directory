from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import versioninformation


@dataclass_json
@dataclass
class ListCoreDefinitionVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    versions: Optional[List[versioninformation.VersionInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Versions' }})
    
