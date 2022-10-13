from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InforNexusConnectorProfileCredentials:
    access_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    datakey: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datakey' }})
    secret_access_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretAccessKey' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
