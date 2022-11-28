from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
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
class CreateDomainNameRequestBodyEndpointConfiguration:
    r"""CreateDomainNameRequestBodyEndpointConfiguration
    The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
    """
    
    types: Optional[List[shared.EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcEndpointIds') }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBodyMutualTLSAuthentication:
    r"""CreateDomainNameRequestBodyMutualTLSAuthentication
    If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
    """
    
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreUri') }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreVersion') }})
    
class CreateDomainNameRequestBodySecurityPolicyEnum(str, Enum):
    TLS_1_0 = "TLS_1_0"
    TLS_1_2 = "TLS_1_2"


@dataclass_json
@dataclass
class CreateDomainNameRequestBody:
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateBody') }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateChain') }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    certificate_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePrivateKey') }})
    endpoint_configuration: Optional[CreateDomainNameRequestBodyEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfiguration') }})
    mutual_tls_authentication: Optional[CreateDomainNameRequestBodyMutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutualTlsAuthentication') }})
    ownership_verification_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownershipVerificationCertificateArn') }})
    regional_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalCertificateArn') }})
    regional_certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalCertificateName') }})
    security_policy: Optional[CreateDomainNameRequestBodySecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPolicy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateDomainNameRequest:
    headers: CreateDomainNameHeaders = field()
    request: CreateDomainNameRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainNameResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    domain_name: Optional[shared.DomainName] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
