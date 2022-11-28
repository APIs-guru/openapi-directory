from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutImageScanningConfigurationXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE_SCANNING_CONFIGURATION = "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration"


@dataclass
class PutImageScanningConfigurationHeaders:
    x_amz_target: PutImageScanningConfigurationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutImageScanningConfigurationRequest:
    headers: PutImageScanningConfigurationHeaders = field()
    request: shared.PutImageScanningConfigurationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutImageScanningConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_exception: Optional[Any] = field(default=None)
    put_image_scanning_configuration_response: Optional[shared.PutImageScanningConfigurationResponse] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
