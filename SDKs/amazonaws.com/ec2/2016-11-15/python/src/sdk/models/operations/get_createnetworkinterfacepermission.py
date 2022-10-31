from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateNetworkInterfacePermissionActionEnum(str, Enum):
    CREATE_NETWORK_INTERFACE_PERMISSION = "CreateNetworkInterfacePermission"

class GetCreateNetworkInterfacePermissionPermissionEnum(str, Enum):
    INSTANCE_ATTACH = "INSTANCE-ATTACH"
    EIP_ASSOCIATE = "EIP-ASSOCIATE"

class GetCreateNetworkInterfacePermissionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateNetworkInterfacePermissionQueryParams:
    action: GetCreateNetworkInterfacePermissionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    aws_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AwsAccountId', 'style': 'form', 'explode': True }})
    aws_service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AwsService', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    permission: GetCreateNetworkInterfacePermissionPermissionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Permission', 'style': 'form', 'explode': True }})
    version: GetCreateNetworkInterfacePermissionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateNetworkInterfacePermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateNetworkInterfacePermissionRequest:
    query_params: GetCreateNetworkInterfacePermissionQueryParams = field(default=None)
    headers: GetCreateNetworkInterfacePermissionHeaders = field(default=None)
    

@dataclass
class GetCreateNetworkInterfacePermissionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
