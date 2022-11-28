from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreatePrivateVirtualInterfaceXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.CreatePrivateVirtualInterface"


@dataclass
class CreatePrivateVirtualInterfaceHeaders:
    x_amz_target: CreatePrivateVirtualInterfaceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePrivateVirtualInterfaceRequest:
    headers: CreatePrivateVirtualInterfaceHeaders = field()
    request: shared.CreatePrivateVirtualInterfaceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePrivateVirtualInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    duplicate_tag_keys_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    virtual_interface: Optional[shared.VirtualInterface] = field(default=None)
    
