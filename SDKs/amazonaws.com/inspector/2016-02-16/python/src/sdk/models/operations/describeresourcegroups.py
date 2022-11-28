from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeResourceGroupsXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_RESOURCE_GROUPS = "InspectorService.DescribeResourceGroups"


@dataclass
class DescribeResourceGroupsHeaders:
    x_amz_target: DescribeResourceGroupsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeResourceGroupsRequest:
    headers: DescribeResourceGroupsHeaders = field()
    request: shared.DescribeResourceGroupsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeResourceGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_resource_groups_response: Optional[shared.DescribeResourceGroupsResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    
