from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsIamConfig:
    signing_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingRegion' }})
    signing_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingServiceName' }})
    
