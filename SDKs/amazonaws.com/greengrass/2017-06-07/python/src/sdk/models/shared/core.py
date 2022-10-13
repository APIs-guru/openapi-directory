from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Core:
    certificate_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    sync_shadow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncShadow' }})
    thing_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThingArn' }})
    
