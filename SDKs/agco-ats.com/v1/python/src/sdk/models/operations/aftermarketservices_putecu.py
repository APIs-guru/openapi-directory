from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesPutEcuPathParams:
    serial_number: str = field(default=None, metadata={'path_param': { 'field_name': 'serialNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AftermarketServicesPutEcuQueryParams:
    edt_instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'EDTInstanceId', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesPutEcuRequests:
    agco_power_services_models_ecu: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    agco_power_services_models_ecu1: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    agco_power_services_models_ecu2: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AftermarketServicesPutEcuRequest:
    path_params: AftermarketServicesPutEcuPathParams = field(default=None)
    query_params: AftermarketServicesPutEcuQueryParams = field(default=None)
    request: AftermarketServicesPutEcuRequests = field(default=None)
    

@dataclass
class AftermarketServicesPutEcuResponse:
    agco_power_services_models_ecu: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
