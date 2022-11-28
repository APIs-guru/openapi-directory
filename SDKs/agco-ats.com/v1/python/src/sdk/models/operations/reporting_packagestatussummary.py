from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingPackageStatusSummaryQueryParams:
    package_id: str = field(metadata={'query_param': { 'field_name': 'PackageID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingPackageStatusSummaryRequest:
    query_params: ReportingPackageStatusSummaryQueryParams = field()
    

@dataclass
class ReportingPackageStatusSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_package_status_summary: Optional[shared.UpdateSystemModelsPackageStatusSummary] = field(default=None)
    
