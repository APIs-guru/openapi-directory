from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookAuthConfiguration:
    allowed_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedIPRange' }})
    secret_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretToken' }})
    
