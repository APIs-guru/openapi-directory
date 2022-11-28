from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeParametersXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_DESCRIBE_PARAMETERS = "AmazonDAXV3.DescribeParameters"


@dataclass
class DescribeParametersHeaders:
    x_amz_target: DescribeParametersXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeParametersRequest:
    headers: DescribeParametersHeaders = field()
    request: shared.DescribeParametersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeParametersResponse:
    content_type: str = field()
    status_code: int = field()
    describe_parameters_response: Optional[shared.DescribeParametersResponse] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    parameter_group_not_found_fault: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    
