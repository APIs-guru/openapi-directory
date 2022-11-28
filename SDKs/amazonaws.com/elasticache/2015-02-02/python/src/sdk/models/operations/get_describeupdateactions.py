from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetDescribeUpdateActionsActionEnum(str, Enum):
    DESCRIBE_UPDATE_ACTIONS = "DescribeUpdateActions"


@dataclass
class GetDescribeUpdateActionsServiceUpdateTimeRange:
    r"""GetDescribeUpdateActionsServiceUpdateTimeRange
    Filters update actions from the service updates that are in available status during the time range.
    """
    
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime' }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime' }})
    
class GetDescribeUpdateActionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeUpdateActionsQueryParams:
    action: GetDescribeUpdateActionsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeUpdateActionsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterIds', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    replication_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupIds', 'style': 'form', 'explode': True }})
    service_update_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateName', 'style': 'form', 'explode': True }})
    service_update_status: Optional[List[shared.ServiceUpdateStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateStatus', 'style': 'form', 'explode': True }})
    service_update_time_range: Optional[GetDescribeUpdateActionsServiceUpdateTimeRange] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateTimeRange', 'style': 'form', 'explode': True }})
    show_node_level_update_status: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ShowNodeLevelUpdateStatus', 'style': 'form', 'explode': True }})
    update_action_status: Optional[List[shared.UpdateActionStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'UpdateActionStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeUpdateActionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeUpdateActionsRequest:
    headers: GetDescribeUpdateActionsHeaders = field()
    query_params: GetDescribeUpdateActionsQueryParams = field()
    

@dataclass
class GetDescribeUpdateActionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
