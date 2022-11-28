from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SapoDataConnectorProfileProperties:
    r"""SapoDataConnectorProfileProperties
     The connector-specific profile properties required when using SAPOData. 
    """
    
    application_host_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationHostUrl') }})
    application_service_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationServicePath') }})
    client_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNumber') }})
    port_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portNumber') }})
    logon_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logonLanguage') }})
    o_auth_properties: Optional[OAuthProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthProperties') }})
    private_link_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateLinkServiceName') }})
    
