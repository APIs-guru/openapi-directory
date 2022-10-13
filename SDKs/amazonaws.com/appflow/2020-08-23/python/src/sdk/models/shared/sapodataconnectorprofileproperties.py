from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oauthproperties


@dataclass_json
@dataclass
class SapoDataConnectorProfileProperties:
    application_host_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationHostUrl' }})
    application_service_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationServicePath' }})
    client_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientNumber' }})
    logon_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logonLanguage' }})
    o_auth_properties: Optional[oauthproperties.OAuthProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oAuthProperties' }})
    port_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portNumber' }})
    private_link_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateLinkServiceName' }})
    
