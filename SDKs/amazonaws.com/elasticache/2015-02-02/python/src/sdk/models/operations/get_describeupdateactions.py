from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetDescribeUpdateActionsActionEnum(str, Enum):
    DESCRIBE_UPDATE_ACTIONS = "DescribeUpdateActions"


@dataclass
class GetDescribeUpdateActionsServiceUpdateTimeRange:
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime' }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime' }})
    
class GetDescribeUpdateActionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeUpdateActionsQueryParams:
    action: GetDescribeUpdateActionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
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
    version: GetDescribeUpdateActionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeUpdateActionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeUpdateActionsRequest:
    query_params: GetDescribeUpdateActionsQueryParams = field(default=None)
    headers: GetDescribeUpdateActionsHeaders = field(default=None)
    

@dataclass
class GetDescribeUpdateActionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
