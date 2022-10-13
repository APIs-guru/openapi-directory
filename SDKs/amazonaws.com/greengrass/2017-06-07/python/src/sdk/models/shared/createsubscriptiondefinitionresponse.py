from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSubscriptionDefinitionResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimestamp' }})
    latest_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestVersion' }})
    latest_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestVersionArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
