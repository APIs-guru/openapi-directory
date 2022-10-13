from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateStudioInput:
    default_s3_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultS3Location' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    studio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    
