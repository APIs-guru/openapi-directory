from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDomainNameHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBodyMutualTLSAuthentication:
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruststoreUri' }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruststoreVersion' }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBody:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_name_configurations: Optional[List[shared.DomainNameConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNameConfigurations' }})
    mutual_tls_authentication: Optional[CreateDomainNameRequestBodyMutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutualTlsAuthentication' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateDomainNameRequest:
    headers: CreateDomainNameHeaders = field(default=None)
    request: CreateDomainNameRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainNameResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_domain_name_response: Optional[shared.CreateDomainNameResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
