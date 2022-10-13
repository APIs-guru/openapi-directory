from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDomainNamePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDomainNameHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateDomainNameRequestBodyMutualTLSAuthentication:
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruststoreUri' }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruststoreVersion' }})
    

@dataclass_json
@dataclass
class UpdateDomainNameRequestBody:
    domain_name_configurations: Optional[List[shared.DomainNameConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNameConfigurations' }})
    mutual_tls_authentication: Optional[UpdateDomainNameRequestBodyMutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutualTlsAuthentication' }})
    

@dataclass
class UpdateDomainNameRequest:
    path_params: UpdateDomainNamePathParams = field(default=None)
    headers: UpdateDomainNameHeaders = field(default=None)
    request: UpdateDomainNameRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDomainNameResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_domain_name_response: Optional[shared.UpdateDomainNameResponse] = field(default=None)
    
