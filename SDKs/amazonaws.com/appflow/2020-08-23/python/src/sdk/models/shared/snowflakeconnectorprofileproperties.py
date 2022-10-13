from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SnowflakeConnectorProfileProperties:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPrefix' }})
    private_link_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateLinkServiceName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    stage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    warehouse: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    
