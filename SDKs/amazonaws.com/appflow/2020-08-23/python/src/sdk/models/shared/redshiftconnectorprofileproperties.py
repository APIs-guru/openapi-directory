from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RedshiftConnectorProfileProperties:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPrefix' }})
    database_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseUrl' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
