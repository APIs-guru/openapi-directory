from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeBackupsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBackupsXAmzTargetEnum(str, Enum):
    BALDR_API_SERVICE_DESCRIBE_BACKUPS = "BaldrApiService.DescribeBackups"


@dataclass
class DescribeBackupsHeaders:
    x_amz_target: DescribeBackupsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeBackupsRequest:
    headers: DescribeBackupsHeaders = field()
    query_params: DescribeBackupsQueryParams = field()
    request: shared.DescribeBackupsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeBackupsResponse:
    content_type: str = field()
    status_code: int = field()
    cloud_hsm_access_denied_exception: Optional[Any] = field(default=None)
    cloud_hsm_internal_failure_exception: Optional[Any] = field(default=None)
    cloud_hsm_invalid_request_exception: Optional[Any] = field(default=None)
    cloud_hsm_resource_not_found_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    cloud_hsm_tag_exception: Optional[Any] = field(default=None)
    describe_backups_response: Optional[shared.DescribeBackupsResponse] = field(default=None)
    
