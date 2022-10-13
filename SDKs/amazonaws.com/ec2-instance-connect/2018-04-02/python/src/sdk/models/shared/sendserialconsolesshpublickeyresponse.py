from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendSerialConsoleSSHPublicKeyResponse:
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Success' }})
    
