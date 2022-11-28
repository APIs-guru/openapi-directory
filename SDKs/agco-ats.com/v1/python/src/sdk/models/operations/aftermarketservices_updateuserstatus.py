from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesUpdateUserStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    agco_power_services_models_user_status: Optional[shared.AgcoPowerServicesModelsUserStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    agco_power_services_models_user_status1: Optional[shared.AgcoPowerServicesModelsUserStatus] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    agco_power_services_models_user_status2: Optional[shared.AgcoPowerServicesModelsUserStatus] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AftermarketServicesUpdateUserStatusRequest:
    request: AftermarketServicesUpdateUserStatusRequests = field()
    

@dataclass
class AftermarketServicesUpdateUserStatusResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    aftermarket_services_update_user_status_200_application_json_boolean: Optional[bool] = field(default=None)
    aftermarket_services_update_user_status_200_text_json_boolean: Optional[bool] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
