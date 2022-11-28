from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CompleteLayerUploadXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_COMPLETE_LAYER_UPLOAD = "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload"


@dataclass
class CompleteLayerUploadHeaders:
    x_amz_target: CompleteLayerUploadXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteLayerUploadRequest:
    headers: CompleteLayerUploadHeaders = field()
    request: shared.CompleteLayerUploadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteLayerUploadResponse:
    content_type: str = field()
    status_code: int = field()
    complete_layer_upload_response: Optional[shared.CompleteLayerUploadResponse] = field(default=None)
    empty_upload_exception: Optional[Any] = field(default=None)
    invalid_layer_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    kms_exception: Optional[Any] = field(default=None)
    layer_already_exists_exception: Optional[Any] = field(default=None)
    layer_part_too_small_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    upload_not_found_exception: Optional[Any] = field(default=None)
    
