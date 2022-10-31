from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyClientVpnEndpointActionEnum(str, Enum):
    MODIFY_CLIENT_VPN_ENDPOINT = "ModifyClientVpnEndpoint"


@dataclass
class GetModifyClientVpnEndpointClientConnectOptions:
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled' }})
    lambda_function_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LambdaFunctionArn' }})
    

@dataclass
class GetModifyClientVpnEndpointConnectionLogOptions:
    cloudwatch_log_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CloudwatchLogGroup' }})
    cloudwatch_log_stream: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CloudwatchLogStream' }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled' }})
    

@dataclass
class GetModifyClientVpnEndpointDNSServers:
    custom_dns_servers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'CustomDnsServers' }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled' }})
    
class GetModifyClientVpnEndpointSelfServicePortalEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class GetModifyClientVpnEndpointVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyClientVpnEndpointQueryParams:
    action: GetModifyClientVpnEndpointActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_connect_options: Optional[GetModifyClientVpnEndpointClientConnectOptions] = field(default=None, metadata={'query_param': { 'field_name': 'ClientConnectOptions', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    connection_log_options: Optional[GetModifyClientVpnEndpointConnectionLogOptions] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionLogOptions', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dns_servers: Optional[GetModifyClientVpnEndpointDNSServers] = field(default=None, metadata={'query_param': { 'field_name': 'DnsServers', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    security_group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SecurityGroupId', 'style': 'form', 'explode': True }})
    self_service_portal: Optional[GetModifyClientVpnEndpointSelfServicePortalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SelfServicePortal', 'style': 'form', 'explode': True }})
    server_certificate_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ServerCertificateArn', 'style': 'form', 'explode': True }})
    split_tunnel: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SplitTunnel', 'style': 'form', 'explode': True }})
    version: GetModifyClientVpnEndpointVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    vpn_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'VpnPort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClientVpnEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClientVpnEndpointRequest:
    query_params: GetModifyClientVpnEndpointQueryParams = field(default=None)
    headers: GetModifyClientVpnEndpointHeaders = field(default=None)
    

@dataclass
class GetModifyClientVpnEndpointResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
