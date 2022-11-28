from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RadiusSettings:
    r"""RadiusSettings
    Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
    """
    
    authentication_protocol: Optional[RadiusAuthenticationProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationProtocol') }})
    display_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayLabel') }})
    radius_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusPort') }})
    radius_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusRetries') }})
    radius_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusServers') }})
    radius_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusTimeout') }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedSecret') }})
    use_same_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseSameUsername') }})
    
