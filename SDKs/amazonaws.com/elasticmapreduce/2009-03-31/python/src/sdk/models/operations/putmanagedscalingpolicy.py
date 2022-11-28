from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutManagedScalingPolicyXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_PUT_MANAGED_SCALING_POLICY = "ElasticMapReduce.PutManagedScalingPolicy"


@dataclass
class PutManagedScalingPolicyHeaders:
    x_amz_target: PutManagedScalingPolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutManagedScalingPolicyRequest:
    headers: PutManagedScalingPolicyHeaders = field()
    request: shared.PutManagedScalingPolicyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutManagedScalingPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    put_managed_scaling_policy_output: Optional[dict[str, Any]] = field(default=None)
    
