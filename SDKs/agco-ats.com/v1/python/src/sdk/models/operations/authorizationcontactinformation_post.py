from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationContactInformationPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    authorization_codes_shared_models_authorization_contact_information: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_authorization_contact_information1: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_authorization_contact_information2: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthorizationContactInformationPostRequest:
    request: AuthorizationContactInformationPostRequests = field()
    

@dataclass
class AuthorizationContactInformationPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_contact_information_post_200_application_json_int32_integer: Optional[int] = field(default=None)
    authorization_contact_information_post_200_text_json_int32_integer: Optional[int] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
