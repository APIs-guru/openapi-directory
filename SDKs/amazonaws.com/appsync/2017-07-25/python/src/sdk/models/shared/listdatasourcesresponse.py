from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasource


@dataclass_json
@dataclass
class ListDataSourcesResponse:
    data_sources: Optional[List[datasource.DataSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSources' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
