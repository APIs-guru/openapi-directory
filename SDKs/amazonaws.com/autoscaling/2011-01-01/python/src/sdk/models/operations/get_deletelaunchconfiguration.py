from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteLaunchConfigurationActionEnum(str, Enum):
    DELETE_LAUNCH_CONFIGURATION = "DeleteLaunchConfiguration"

class GetDeleteLaunchConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetDeleteLaunchConfigurationQueryParams:
    action: GetDeleteLaunchConfigurationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    launch_configuration_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LaunchConfigurationName', 'style': 'form', 'explode': True }})
    version: GetDeleteLaunchConfigurationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteLaunchConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteLaunchConfigurationRequest:
    query_params: GetDeleteLaunchConfigurationQueryParams = field(default=None)
    headers: GetDeleteLaunchConfigurationHeaders = field(default=None)
    

@dataclass
class GetDeleteLaunchConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
