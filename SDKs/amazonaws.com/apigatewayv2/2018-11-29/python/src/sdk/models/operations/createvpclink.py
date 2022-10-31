from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateVpcLinkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateVpcLinkRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateVpcLinkRequest:
    headers: CreateVpcLinkHeaders = field(default=None)
    request: CreateVpcLinkRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVpcLinkResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_vpc_link_response: Optional[shared.CreateVpcLinkResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
