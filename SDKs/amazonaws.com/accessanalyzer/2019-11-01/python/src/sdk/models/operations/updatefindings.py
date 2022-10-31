from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateFindingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateFindingsRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class UpdateFindingsRequestBody:
    analyzer_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzerArn' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    status: UpdateFindingsRequestBodyStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateFindingsRequest:
    headers: UpdateFindingsHeaders = field(default=None)
    request: UpdateFindingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFindingsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
