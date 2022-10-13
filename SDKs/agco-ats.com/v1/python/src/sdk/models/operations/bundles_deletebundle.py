from dataclasses import dataclass, field



@dataclass
class BundlesDeleteBundlePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BundlesDeleteBundleRequest:
    path_params: BundlesDeleteBundlePathParams = field(default=None)
    

@dataclass
class BundlesDeleteBundleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
