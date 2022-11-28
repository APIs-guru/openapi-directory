from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppPostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AppPost:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    apns_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apnsCertificate') }})
    apns_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apnsPrivateKey') }})
    apns_use_sandbox_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apnsUseSandboxEndpoint') }})
    fcm_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmKey') }})
    status: Optional[AppPostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tls_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsOnly') }})
    
