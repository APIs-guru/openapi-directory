from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeFileSystemAliasesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeFileSystemAliasesXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEM_ALIASES = "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases"


@dataclass
class DescribeFileSystemAliasesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeFileSystemAliasesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeFileSystemAliasesRequest:
    query_params: DescribeFileSystemAliasesQueryParams = field(default=None)
    headers: DescribeFileSystemAliasesHeaders = field(default=None)
    request: shared.DescribeFileSystemAliasesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeFileSystemAliasesResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_file_system_aliases_response: Optional[shared.DescribeFileSystemAliasesResponse] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
