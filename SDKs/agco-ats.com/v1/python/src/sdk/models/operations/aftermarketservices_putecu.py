from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesPutEcuPathParams:
    serial_number: str = field(metadata={'path_param': { 'field_name': 'serialNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AftermarketServicesPutEcuQueryParams:
    edt_instance_id: str = field(metadata={'query_param': { 'field_name': 'EDTInstanceId', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesPutEcuRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    agco_power_services_models_ecu: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    agco_power_services_models_ecu1: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    agco_power_services_models_ecu2: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AftermarketServicesPutEcuRequest:
    path_params: AftermarketServicesPutEcuPathParams = field()
    query_params: AftermarketServicesPutEcuQueryParams = field()
    request: AftermarketServicesPutEcuRequests = field()
    

@dataclass
class AftermarketServicesPutEcuResponse:
    content_type: str = field()
    status_code: int = field()
    agco_power_services_models_ecu: Optional[shared.AgcoPowerServicesModelsEcu] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
