from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDomainNameHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBodyEndpointConfiguration:
    types: Optional[List[shared.EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcEndpointIds' }})
    

@dataclass_json
@dataclass
class CreateDomainNameRequestBodyMutualTLSAuthentication:
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truststoreUri' }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truststoreVersion' }})
    
class CreateDomainNameRequestBodySecurityPolicyEnum(str, Enum):
    TLS_1_0 = "TLS_1_0"
    TLS_1_2 = "TLS_1_2"


@dataclass_json
@dataclass
class CreateDomainNameRequestBody:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateBody' }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateChain' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    certificate_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePrivateKey' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    endpoint_configuration: Optional[CreateDomainNameRequestBodyEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointConfiguration' }})
    mutual_tls_authentication: Optional[CreateDomainNameRequestBodyMutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutualTlsAuthentication' }})
    ownership_verification_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownershipVerificationCertificateArn' }})
    regional_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalCertificateArn' }})
    regional_certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalCertificateName' }})
    security_policy: Optional[CreateDomainNameRequestBodySecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPolicy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateDomainNameRequest:
    headers: CreateDomainNameHeaders = field(default=None)
    request: CreateDomainNameRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainNameResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    domain_name: Optional[shared.DomainName] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
