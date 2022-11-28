from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetBatchStopUpdateActionActionEnum(str, Enum):
    BATCH_STOP_UPDATE_ACTION = "BatchStopUpdateAction"

class GetBatchStopUpdateActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetBatchStopUpdateActionQueryParams:
    action: GetBatchStopUpdateActionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    service_update_name: str = field(metadata={'query_param': { 'field_name': 'ServiceUpdateName', 'style': 'form', 'explode': True }})
    version: GetBatchStopUpdateActionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterIds', 'style': 'form', 'explode': True }})
    replication_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBatchStopUpdateActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchStopUpdateActionRequest:
    headers: GetBatchStopUpdateActionHeaders = field()
    query_params: GetBatchStopUpdateActionQueryParams = field()
    

@dataclass
class GetBatchStopUpdateActionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
