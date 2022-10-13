from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import radiusauthenticationprotocol_enum


@dataclass_json
@dataclass
class RadiusSettings:
    authentication_protocol: Optional[radiusauthenticationprotocol_enum.RadiusAuthenticationProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationProtocol' }})
    display_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayLabel' }})
    radius_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusPort' }})
    radius_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusRetries' }})
    radius_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusServers' }})
    radius_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusTimeout' }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedSecret' }})
    use_same_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseSameUsername' }})
    
