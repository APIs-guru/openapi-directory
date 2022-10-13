from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingPackageStatusSummaryQueryParams:
    package_id: str = field(default=None, metadata={'query_param': { 'field_name': 'PackageID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingPackageStatusSummaryRequest:
    query_params: ReportingPackageStatusSummaryQueryParams = field(default=None)
    

@dataclass
class ReportingPackageStatusSummaryResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_package_status_summary: Optional[shared.UpdateSystemModelsPackageStatusSummary] = field(default=None)
    
