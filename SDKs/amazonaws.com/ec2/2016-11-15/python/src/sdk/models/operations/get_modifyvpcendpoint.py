from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyVpcEndpointActionEnum(str, Enum):
    MODIFY_VPC_ENDPOINT = "ModifyVpcEndpoint"

class GetModifyVpcEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcEndpointQueryParams:
    action: GetModifyVpcEndpointActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetModifyVpcEndpointVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_endpoint_id: str = field(metadata={'query_param': { 'field_name': 'VpcEndpointId', 'style': 'form', 'explode': True }})
    add_route_table_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddRouteTableId', 'style': 'form', 'explode': True }})
    add_security_group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddSecurityGroupId', 'style': 'form', 'explode': True }})
    add_subnet_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddSubnetId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    policy_document: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyDocument', 'style': 'form', 'explode': True }})
    private_dns_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PrivateDnsEnabled', 'style': 'form', 'explode': True }})
    remove_route_table_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveRouteTableId', 'style': 'form', 'explode': True }})
    remove_security_group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveSecurityGroupId', 'style': 'form', 'explode': True }})
    remove_subnet_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveSubnetId', 'style': 'form', 'explode': True }})
    reset_policy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ResetPolicy', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyVpcEndpointRequest:
    headers: GetModifyVpcEndpointHeaders = field()
    query_params: GetModifyVpcEndpointQueryParams = field()
    

@dataclass
class GetModifyVpcEndpointResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
