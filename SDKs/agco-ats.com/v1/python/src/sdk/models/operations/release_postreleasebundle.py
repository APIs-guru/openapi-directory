from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReleasePostReleaseBundlePathParams:
    bundle_id: str = field(metadata={'path_param': { 'field_name': 'BundleId', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'ReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleasePostReleaseBundleRequest:
    path_params: ReleasePostReleaseBundlePathParams = field()
    

@dataclass
class ReleasePostReleaseBundleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
