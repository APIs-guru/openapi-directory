from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterThingResponse:
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePem' }})
    resource_arns: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArns' }})
    
