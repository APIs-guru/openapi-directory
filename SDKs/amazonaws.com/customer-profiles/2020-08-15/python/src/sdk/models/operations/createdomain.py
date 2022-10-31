from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDomainPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDomainHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDomainRequestBodyMatching:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    

@dataclass_json
@dataclass
class CreateDomainRequestBody:
    dead_letter_queue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterQueueUrl' }})
    default_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultEncryptionKey' }})
    default_expiration_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultExpirationDays' }})
    matching: Optional[CreateDomainRequestBodyMatching] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Matching' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateDomainRequest:
    path_params: CreateDomainPathParams = field(default=None)
    headers: CreateDomainHeaders = field(default=None)
    request: CreateDomainRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_domain_response: Optional[shared.CreateDomainResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
