from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FederationParameters:
    application_call_back_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationCallBackURL' }})
    attribute_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeMap' }})
    federation_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationProviderName' }})
    federation_urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationURN' }})
    saml_metadata_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlMetadataDocument' }})
    saml_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlMetadataURL' }})
    
