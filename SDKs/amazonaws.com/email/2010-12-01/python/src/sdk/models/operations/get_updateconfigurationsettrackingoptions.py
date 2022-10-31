from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateConfigurationSetTrackingOptionsActionEnum(str, Enum):
    UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS = "UpdateConfigurationSetTrackingOptions"


@dataclass
class GetUpdateConfigurationSetTrackingOptionsTrackingOptions:
    custom_redirect_domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomRedirectDomain' }})
    
class GetUpdateConfigurationSetTrackingOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetUpdateConfigurationSetTrackingOptionsQueryParams:
    action: GetUpdateConfigurationSetTrackingOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    configuration_set_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ConfigurationSetName', 'style': 'form', 'explode': True }})
    tracking_options: GetUpdateConfigurationSetTrackingOptionsTrackingOptions = field(default=None, metadata={'query_param': { 'field_name': 'TrackingOptions', 'style': 'form', 'explode': True }})
    version: GetUpdateConfigurationSetTrackingOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateConfigurationSetTrackingOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateConfigurationSetTrackingOptionsRequest:
    query_params: GetUpdateConfigurationSetTrackingOptionsQueryParams = field(default=None)
    headers: GetUpdateConfigurationSetTrackingOptionsHeaders = field(default=None)
    

@dataclass
class GetUpdateConfigurationSetTrackingOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
