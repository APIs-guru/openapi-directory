from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeUserStackAssociationsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USER_STACK_ASSOCIATIONS = "PhotonAdminProxyService.DescribeUserStackAssociations"


@dataclass
class DescribeUserStackAssociationsHeaders:
    x_amz_target: DescribeUserStackAssociationsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeUserStackAssociationsRequest:
    headers: DescribeUserStackAssociationsHeaders = field()
    request: shared.DescribeUserStackAssociationsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeUserStackAssociationsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_user_stack_associations_result: Optional[shared.DescribeUserStackAssociationsResult] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    
