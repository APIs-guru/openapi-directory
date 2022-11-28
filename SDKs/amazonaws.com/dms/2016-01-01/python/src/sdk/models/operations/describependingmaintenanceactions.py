from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribePendingMaintenanceActionsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribePendingMaintenanceActionsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_PENDING_MAINTENANCE_ACTIONS = "AmazonDMSv20160101.DescribePendingMaintenanceActions"


@dataclass
class DescribePendingMaintenanceActionsHeaders:
    x_amz_target: DescribePendingMaintenanceActionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePendingMaintenanceActionsRequest:
    headers: DescribePendingMaintenanceActionsHeaders = field()
    query_params: DescribePendingMaintenanceActionsQueryParams = field()
    request: shared.DescribePendingMaintenanceActionsMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribePendingMaintenanceActionsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_pending_maintenance_actions_response: Optional[shared.DescribePendingMaintenanceActionsResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    
