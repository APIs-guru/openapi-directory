from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PackageReportsDefaultPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'ClientID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageReportsDefaultRequest:
    path_params: PackageReportsDefaultPathParams = field()
    

@dataclass
class PackageReportsDefaultResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_package_reports: Optional[List[shared.UpdateSystemModelsPackageReport]] = field(default=None)
    
