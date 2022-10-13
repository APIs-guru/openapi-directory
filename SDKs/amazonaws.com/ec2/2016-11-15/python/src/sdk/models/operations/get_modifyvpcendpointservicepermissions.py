from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyVpcEndpointServicePermissionsActionEnum(str, Enum):
    MODIFY_VPC_ENDPOINT_SERVICE_PERMISSIONS = "ModifyVpcEndpointServicePermissions"

class GetModifyVpcEndpointServicePermissionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcEndpointServicePermissionsQueryParams:
    action: GetModifyVpcEndpointServicePermissionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    add_allowed_principals: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddAllowedPrincipals', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    remove_allowed_principals: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveAllowedPrincipals', 'style': 'form', 'explode': True }})
    service_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ServiceId', 'style': 'form', 'explode': True }})
    version: GetModifyVpcEndpointServicePermissionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcEndpointServicePermissionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyVpcEndpointServicePermissionsRequest:
    query_params: GetModifyVpcEndpointServicePermissionsQueryParams = field(default=None)
    headers: GetModifyVpcEndpointServicePermissionsHeaders = field(default=None)
    

@dataclass
class GetModifyVpcEndpointServicePermissionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
