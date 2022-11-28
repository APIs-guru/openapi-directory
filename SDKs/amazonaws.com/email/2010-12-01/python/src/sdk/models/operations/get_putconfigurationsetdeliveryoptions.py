from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetPutConfigurationSetDeliveryOptionsActionEnum(str, Enum):
    PUT_CONFIGURATION_SET_DELIVERY_OPTIONS = "PutConfigurationSetDeliveryOptions"


@dataclass
class GetPutConfigurationSetDeliveryOptionsDeliveryOptions:
    r"""GetPutConfigurationSetDeliveryOptionsDeliveryOptions
    Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
    """
    
    tls_policy: Optional[shared.TLSPolicyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TlsPolicy' }})
    
class GetPutConfigurationSetDeliveryOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetPutConfigurationSetDeliveryOptionsQueryParams:
    action: GetPutConfigurationSetDeliveryOptionsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    configuration_set_name: str = field(metadata={'query_param': { 'field_name': 'ConfigurationSetName', 'style': 'form', 'explode': True }})
    version: GetPutConfigurationSetDeliveryOptionsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    delivery_options: Optional[GetPutConfigurationSetDeliveryOptionsDeliveryOptions] = field(default=None, metadata={'query_param': { 'field_name': 'DeliveryOptions', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutConfigurationSetDeliveryOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutConfigurationSetDeliveryOptionsRequest:
    headers: GetPutConfigurationSetDeliveryOptionsHeaders = field()
    query_params: GetPutConfigurationSetDeliveryOptionsQueryParams = field()
    

@dataclass
class GetPutConfigurationSetDeliveryOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
