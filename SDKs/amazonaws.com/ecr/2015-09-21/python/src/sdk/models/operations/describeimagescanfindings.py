from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeImageScanFindingsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeImageScanFindingsXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_SCAN_FINDINGS = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"


@dataclass
class DescribeImageScanFindingsHeaders:
    x_amz_target: DescribeImageScanFindingsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeImageScanFindingsRequest:
    headers: DescribeImageScanFindingsHeaders = field()
    query_params: DescribeImageScanFindingsQueryParams = field()
    request: shared.DescribeImageScanFindingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeImageScanFindingsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_image_scan_findings_response: Optional[shared.DescribeImageScanFindingsResponse] = field(default=None)
    image_not_found_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    scan_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
