from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetDescribeConfigurationSetActionEnum(str, Enum):
    DESCRIBE_CONFIGURATION_SET = "DescribeConfigurationSet"

class GetDescribeConfigurationSetVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDescribeConfigurationSetQueryParams:
    action: GetDescribeConfigurationSetActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    configuration_set_attribute_names: Optional[List[shared.ConfigurationSetAttributeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ConfigurationSetAttributeNames', 'style': 'form', 'explode': True }})
    configuration_set_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ConfigurationSetName', 'style': 'form', 'explode': True }})
    version: GetDescribeConfigurationSetVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeConfigurationSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeConfigurationSetRequest:
    query_params: GetDescribeConfigurationSetQueryParams = field(default=None)
    headers: GetDescribeConfigurationSetHeaders = field(default=None)
    

@dataclass
class GetDescribeConfigurationSetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
