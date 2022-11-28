from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutRegistryPolicyXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REGISTRY_POLICY = "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy"


@dataclass
class PutRegistryPolicyHeaders:
    x_amz_target: PutRegistryPolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRegistryPolicyRequest:
    headers: PutRegistryPolicyHeaders = field()
    request: shared.PutRegistryPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRegistryPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_exception: Optional[Any] = field(default=None)
    put_registry_policy_response: Optional[shared.PutRegistryPolicyResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
