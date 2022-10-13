from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingBundleStatusSummaryQueryParams:
    bundle_id: str = field(default=None, metadata={'query_param': { 'field_name': 'BundleID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingBundleStatusSummaryRequest:
    query_params: ReportingBundleStatusSummaryQueryParams = field(default=None)
    

@dataclass
class ReportingBundleStatusSummaryResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_package_status_summary_: Optional[shared.APIPagedResponseUpdateSystemModelsPackageStatusSummary] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
