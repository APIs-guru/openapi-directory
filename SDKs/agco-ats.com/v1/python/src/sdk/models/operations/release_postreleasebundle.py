from dataclasses import dataclass, field



@dataclass
class ReleasePostReleaseBundlePathParams:
    bundle_id: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleId', 'style': 'simple', 'explode': False }})
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleasePostReleaseBundleRequest:
    path_params: ReleasePostReleaseBundlePathParams = field(default=None)
    

@dataclass
class ReleasePostReleaseBundleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
