from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BrandsBrandsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    brands_brands_200_application_json_strings: Optional[List[str]] = field(default=None)
    brands_brands_200_text_json_strings: Optional[List[str]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
