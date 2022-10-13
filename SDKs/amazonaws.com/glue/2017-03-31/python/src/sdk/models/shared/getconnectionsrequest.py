from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import getconnectionsfilter


@dataclass_json
@dataclass
class GetConnectionsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    filter: Optional[getconnectionsfilter.GetConnectionsFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    hide_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HidePassword' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
