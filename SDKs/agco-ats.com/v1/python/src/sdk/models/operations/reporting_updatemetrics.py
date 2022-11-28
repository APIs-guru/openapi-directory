from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingUpdateMetricsQueryParams:
    update_group_id: str = field(metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    bundle_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bundleNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingUpdateMetricsRequest:
    query_params: ReportingUpdateMetricsQueryParams = field()
    

@dataclass
class ReportingUpdateMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_update_metrics_data: Optional[shared.UpdateSystemModelsUpdateMetricsData] = field(default=None)
    
