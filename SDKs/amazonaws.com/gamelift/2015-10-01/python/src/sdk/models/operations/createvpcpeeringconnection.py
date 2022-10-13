from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateVpcPeeringConnectionXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_VPC_PEERING_CONNECTION = "GameLift.CreateVpcPeeringConnection"


@dataclass
class CreateVpcPeeringConnectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateVpcPeeringConnectionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateVpcPeeringConnectionRequest:
    headers: CreateVpcPeeringConnectionHeaders = field(default=None)
    request: shared.CreateVpcPeeringConnectionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVpcPeeringConnectionResponse:
    content_type: str = field(default=None)
    create_vpc_peering_connection_output: Optional[dict[str, Any]] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
