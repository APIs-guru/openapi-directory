from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyLunaClientRequest:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    client_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientArn' }})
    
