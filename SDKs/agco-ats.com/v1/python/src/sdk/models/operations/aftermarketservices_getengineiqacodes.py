from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetEngineIqaCodesPathParams:
    serial_number: str = field(metadata={'path_param': { 'field_name': 'serialNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AftermarketServicesGetEngineIqaCodesQueryParams:
    edt_instance_id: str = field(metadata={'query_param': { 'field_name': 'EDTInstanceId', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesGetEngineIqaCodesRequest:
    path_params: AftermarketServicesGetEngineIqaCodesPathParams = field()
    query_params: AftermarketServicesGetEngineIqaCodesQueryParams = field()
    

@dataclass
class AftermarketServicesGetEngineIqaCodesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    aftermarket_services_get_engine_iqa_codes_200_application_json_strings: Optional[List[str]] = field(default=None)
    aftermarket_services_get_engine_iqa_codes_200_text_json_strings: Optional[List[str]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
