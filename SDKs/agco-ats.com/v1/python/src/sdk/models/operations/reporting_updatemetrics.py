from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingUpdateMetricsQueryParams:
    update_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    bundle_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bundleNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingUpdateMetricsRequest:
    query_params: ReportingUpdateMetricsQueryParams = field(default=None)
    

@dataclass
class ReportingUpdateMetricsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_update_metrics_data: Optional[shared.UpdateSystemModelsUpdateMetricsData] = field(default=None)
    
