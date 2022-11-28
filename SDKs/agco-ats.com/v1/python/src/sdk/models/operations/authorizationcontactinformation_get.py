from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationContactInformationGetQueryParams:
    after_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    authorization_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorizationCode', 'style': 'form', 'explode': True }})
    before_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'beforeDate', 'style': 'form', 'explode': True }})
    dealer_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dealerCode', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizationContactInformationGetRequest:
    query_params: AuthorizationContactInformationGetQueryParams = field()
    

@dataclass
class AuthorizationContactInformationGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_authorization_codes_shared_models_authorization_contact_information_: Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
