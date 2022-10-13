from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetCertsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
