from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import updateconnectionauthrequestparameters
from . import connectionauthorizationtype_enum


@dataclass_json
@dataclass
class UpdateConnectionRequest:
    auth_parameters: Optional[updateconnectionauthrequestparameters.UpdateConnectionAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthParameters' }})
    authorization_type: Optional[connectionauthorizationtype_enum.ConnectionAuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
