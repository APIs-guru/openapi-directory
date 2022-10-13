from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDynamicThingGroupResponse:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    thing_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupArn' }})
    thing_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupId' }})
    thing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupName' }})
    
