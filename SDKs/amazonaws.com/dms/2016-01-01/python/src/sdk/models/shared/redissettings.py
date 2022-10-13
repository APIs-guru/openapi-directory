from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import redisauthtypevalue_enum
from . import sslsecurityprotocolvalue_enum


@dataclass_json
@dataclass
class RedisSettings:
    auth_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthPassword' }})
    auth_type: Optional[redisauthtypevalue_enum.RedisAuthTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthType' }})
    auth_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthUserName' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    ssl_ca_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslCaCertificateArn' }})
    ssl_security_protocol: Optional[sslsecurityprotocolvalue_enum.SslSecurityProtocolValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslSecurityProtocol' }})
    
