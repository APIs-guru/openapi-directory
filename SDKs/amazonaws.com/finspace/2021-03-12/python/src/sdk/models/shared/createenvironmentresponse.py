from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateEnvironmentResponse:
    environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentArn' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    environment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentUrl' }})
    
