from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetProductionDataPathParams:
    serial_number: str = field(metadata={'path_param': { 'field_name': 'serialNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AftermarketServicesGetProductionDataQueryParams:
    edt_instance_id: str = field(metadata={'query_param': { 'field_name': 'EDTInstanceId', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesGetProductionDataRequest:
    path_params: AftermarketServicesGetProductionDataPathParams = field()
    query_params: AftermarketServicesGetProductionDataQueryParams = field()
    

@dataclass
class AftermarketServicesGetProductionDataResponse:
    content_type: str = field()
    status_code: int = field()
    agco_power_services_models_production_data: Optional[List[shared.AgcoPowerServicesModelsProductionData]] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
