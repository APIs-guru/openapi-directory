from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateSamlProviderActionEnum(str, Enum):
    UPDATE_SAML_PROVIDER = "UpdateSAMLProvider"

class GetUpdateSamlProviderVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateSamlProviderQueryParams:
    action: GetUpdateSamlProviderActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    saml_metadata_document: str = field(default=None, metadata={'query_param': { 'field_name': 'SAMLMetadataDocument', 'style': 'form', 'explode': True }})
    saml_provider_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'SAMLProviderArn', 'style': 'form', 'explode': True }})
    version: GetUpdateSamlProviderVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateSamlProviderHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateSamlProviderRequest:
    query_params: GetUpdateSamlProviderQueryParams = field(default=None)
    headers: GetUpdateSamlProviderHeaders = field(default=None)
    

@dataclass
class GetUpdateSamlProviderResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
