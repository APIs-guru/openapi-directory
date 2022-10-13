from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tableversion


@dataclass_json
@dataclass
class GetTableVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    table_versions: Optional[List[tableversion.TableVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableVersions' }})
    
