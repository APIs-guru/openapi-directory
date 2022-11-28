from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDescribeEnvironmentsActionEnum(str, Enum):
    DESCRIBE_ENVIRONMENTS = "DescribeEnvironments"

class GetDescribeEnvironmentsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDescribeEnvironmentsQueryParams:
    action: GetDescribeEnvironmentsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeEnvironmentsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    application_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ApplicationName', 'style': 'form', 'explode': True }})
    environment_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentIds', 'style': 'form', 'explode': True }})
    environment_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentNames', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeDeleted', 'style': 'form', 'explode': True }})
    included_deleted_back_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'IncludedDeletedBackTo', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    version_label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VersionLabel', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeEnvironmentsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeEnvironmentsRequest:
    headers: GetDescribeEnvironmentsHeaders = field()
    query_params: GetDescribeEnvironmentsQueryParams = field()
    

@dataclass
class GetDescribeEnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
