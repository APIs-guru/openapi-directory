from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackagesGetPackagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageRequest:
    path_params: PackagesGetPackagePathParams = field(default=None)
    

@dataclass
class PackagesGetPackageResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_package: Optional[shared.UpdateSystemModelsPackage] = field(default=None)
    
