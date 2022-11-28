from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeOrganizationConformancePacksQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeOrganizationConformancePacksXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS = "StarlingDoveService.DescribeOrganizationConformancePacks"


@dataclass
class DescribeOrganizationConformancePacksHeaders:
    x_amz_target: DescribeOrganizationConformancePacksXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeOrganizationConformancePacksRequest:
    headers: DescribeOrganizationConformancePacksHeaders = field()
    query_params: DescribeOrganizationConformancePacksQueryParams = field()
    request: shared.DescribeOrganizationConformancePacksRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeOrganizationConformancePacksResponse:
    content_type: str = field()
    status_code: int = field()
    describe_organization_conformance_packs_response: Optional[shared.DescribeOrganizationConformancePacksResponse] = field(default=None)
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    no_such_organization_conformance_pack_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    
