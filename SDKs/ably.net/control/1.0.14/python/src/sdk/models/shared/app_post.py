from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AppPostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AppPost:
    apns_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apnsCertificate' }})
    apns_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apnsPrivateKey' }})
    apns_use_sandbox_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apnsUseSandboxEndpoint' }})
    fcm_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcmKey' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[AppPostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tls_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsOnly' }})
    
