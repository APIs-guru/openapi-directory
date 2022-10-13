from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataflowendpointlistitem


@dataclass_json
@dataclass
class ListDataflowEndpointGroupsResponse:
    dataflow_endpoint_group_list: Optional[List[dataflowendpointlistitem.DataflowEndpointListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointGroupList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
