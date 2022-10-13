from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PackageReportsDefaultPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ClientID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageReportsDefaultRequest:
    path_params: PackageReportsDefaultPathParams = field(default=None)
    

@dataclass
class PackageReportsDefaultResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_package_reports: Optional[List[shared.UpdateSystemModelsPackageReport]] = field(default=None)
    
