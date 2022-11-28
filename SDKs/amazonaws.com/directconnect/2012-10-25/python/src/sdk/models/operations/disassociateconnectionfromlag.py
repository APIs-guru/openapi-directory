from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisassociateConnectionFromLagXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG = "OvertureService.DisassociateConnectionFromLag"


@dataclass
class DisassociateConnectionFromLagHeaders:
    x_amz_target: DisassociateConnectionFromLagXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateConnectionFromLagRequest:
    headers: DisassociateConnectionFromLagHeaders = field()
    request: shared.DisassociateConnectionFromLagRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateConnectionFromLagResponse:
    content_type: str = field()
    status_code: int = field()
    connection: Optional[shared.Connection] = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    
