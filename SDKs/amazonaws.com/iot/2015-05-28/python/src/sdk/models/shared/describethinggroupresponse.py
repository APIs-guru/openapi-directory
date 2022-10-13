from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dynamicgroupstatus_enum
from . import thinggroupmetadata
from . import thinggroupproperties


@dataclass_json
@dataclass
class DescribeThingGroupResponse:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    status: Optional[dynamicgroupstatus_enum.DynamicGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    thing_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupArn' }})
    thing_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupId' }})
    thing_group_metadata: Optional[thinggroupmetadata.ThingGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupMetadata' }})
    thing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupName' }})
    thing_group_properties: Optional[thinggroupproperties.ThingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupProperties' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
