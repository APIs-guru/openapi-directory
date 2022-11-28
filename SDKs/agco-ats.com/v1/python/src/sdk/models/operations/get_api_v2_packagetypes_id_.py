from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2PackageTypesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2PackageTypesIDRequest:
    path_params: GetAPIV2PackageTypesIDPathParams = field()
    

@dataclass
class GetAPIV2PackageTypesIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_package_type: Optional[shared.UpdateSystemModelsPackageType] = field(default=None)
    
