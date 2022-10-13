from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationContactInformationPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    authorization_codes_shared_models_authorization_contact_information: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_authorization_contact_information1: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_authorization_contact_information2: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthorizationContactInformationPostRequest:
    request: AuthorizationContactInformationPostRequests = field(default=None)
    

@dataclass
class AuthorizationContactInformationPostResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_contact_information_post_200_application_json_int32_integer: Optional[int] = field(default=None)
    authorization_contact_information_post_200_text_json_int32_integer: Optional[int] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
