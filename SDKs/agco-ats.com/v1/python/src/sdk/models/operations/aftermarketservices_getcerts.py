from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetCertsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
