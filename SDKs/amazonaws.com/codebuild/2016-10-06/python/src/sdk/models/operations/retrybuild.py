from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RetryBuildXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_RETRY_BUILD = "CodeBuild_20161006.RetryBuild"


@dataclass
class RetryBuildHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RetryBuildXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetryBuildRequest:
    headers: RetryBuildHeaders = field(default=None)
    request: shared.RetryBuildInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RetryBuildResponse:
    account_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retry_build_output: Optional[shared.RetryBuildOutput] = field(default=None)
    status_code: int = field(default=None)
    
