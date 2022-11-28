from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateDomainNameRequestBodyMutualTLSAuthentication
    The mutual TLS authentication configuration for a custom domain name.
    """
    
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreUri') }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreVersion') }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBody:
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_name_configurations: Optional[List[shared.DomainNameConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNameConfigurations') }})
    mutual_tls_authentication: Optional[CreateDomainNameRequestBodyMutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutualTlsAuthentication') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateDomainNameRequest:
    headers: CreateDomainNameHeaders = field()
    request: CreateDomainNameRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainNameResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_domain_name_response: Optional[shared.CreateDomainNameResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
