from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum
from . import tag


@dataclass_json
@dataclass
class CreateEnvironmentEc2Request:
    automatic_stop_time_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automaticStopTimeMinutes' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    connection_type: Optional[connectiontype_enum.ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerArn' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
