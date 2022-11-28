from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BundlesDeleteBundlePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BundlesDeleteBundleRequest:
    path_params: BundlesDeleteBundlePathParams = field()
    

@dataclass
class BundlesDeleteBundleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
