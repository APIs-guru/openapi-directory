from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyVpcEndpointServiceConfigurationActionEnum(str, Enum):
    MODIFY_VPC_ENDPOINT_SERVICE_CONFIGURATION = "ModifyVpcEndpointServiceConfiguration"

class GetModifyVpcEndpointServiceConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcEndpointServiceConfigurationQueryParams:
    action: GetModifyVpcEndpointServiceConfigurationActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    service_id: str = field(metadata={'query_param': { 'field_name': 'ServiceId', 'style': 'form', 'explode': True }})
    version: GetModifyVpcEndpointServiceConfigurationVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    acceptance_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AcceptanceRequired', 'style': 'form', 'explode': True }})
    add_gateway_load_balancer_arn: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddGatewayLoadBalancerArn', 'style': 'form', 'explode': True }})
    add_network_load_balancer_arn: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddNetworkLoadBalancerArn', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    private_dns_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PrivateDnsName', 'style': 'form', 'explode': True }})
    remove_gateway_load_balancer_arn: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveGatewayLoadBalancerArn', 'style': 'form', 'explode': True }})
    remove_network_load_balancer_arn: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveNetworkLoadBalancerArn', 'style': 'form', 'explode': True }})
    remove_private_dns_name: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RemovePrivateDnsName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcEndpointServiceConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyVpcEndpointServiceConfigurationRequest:
    headers: GetModifyVpcEndpointServiceConfigurationHeaders = field()
    query_params: GetModifyVpcEndpointServiceConfigurationQueryParams = field()
    

@dataclass
class GetModifyVpcEndpointServiceConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
