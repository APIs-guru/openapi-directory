from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedisSettings:
    r"""RedisSettings
    Provides information that defines a Redis target endpoint.
    """
    
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    auth_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthPassword') }})
    auth_type: Optional[RedisAuthTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthType') }})
    auth_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthUserName') }})
    ssl_ca_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslCaCertificateArn') }})
    ssl_security_protocol: Optional[SslSecurityProtocolValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslSecurityProtocol') }})
    
