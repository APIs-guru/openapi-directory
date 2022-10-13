from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutProfileObjectTypePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    object_type_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ObjectTypeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProfileObjectTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutProfileObjectTypeRequestBody:
    allow_profile_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowProfileCreation' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionKey' }})
    expiration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDays' }})
    fields: Optional[dict[str, shared.ObjectTypeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fields' }})
    keys: Optional[dict[str, List[shared.ObjectTypeKey]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    

@dataclass
class PutProfileObjectTypeRequest:
    path_params: PutProfileObjectTypePathParams = field(default=None)
    headers: PutProfileObjectTypeHeaders = field(default=None)
    request: PutProfileObjectTypeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProfileObjectTypeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_profile_object_type_response: Optional[shared.PutProfileObjectTypeResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
