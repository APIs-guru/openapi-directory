from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import createconnectionauthrequestparameters
from . import connectionauthorizationtype_enum


@dataclass_json
@dataclass
class CreateConnectionRequest:
    auth_parameters: createconnectionauthrequestparameters.CreateConnectionAuthRequestParameters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthParameters' }})
    authorization_type: connectionauthorizationtype_enum.ConnectionAuthorizationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
