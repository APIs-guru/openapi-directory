from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class AttachSecurityProfilePathParams:
    security_profile_name: str = field(metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AttachSecurityProfileQueryParams:
    security_profile_target_arn: str = field(metadata={'query_param': { 'field_name': 'securityProfileTargetArn', 'style': 'form', 'explode': True }})
    

@dataclass
class AttachSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AttachSecurityProfileRequest:
    headers: AttachSecurityProfileHeaders = field()
    path_params: AttachSecurityProfilePathParams = field()
    query_params: AttachSecurityProfileQueryParams = field()
    

@dataclass
class AttachSecurityProfileResponse:
    content_type: str = field()
    status_code: int = field()
    attach_security_profile_response: Optional[dict[str, Any]] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
