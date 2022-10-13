from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetConnectionStatusResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    aftermarket_services_get_connection_status_200_application_json_boolean: Optional[bool] = field(default=None)
    aftermarket_services_get_connection_status_200_text_json_boolean: Optional[bool] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
