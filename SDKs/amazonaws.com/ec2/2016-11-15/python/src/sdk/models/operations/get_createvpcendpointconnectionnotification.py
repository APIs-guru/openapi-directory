from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCreateVpcEndpointConnectionNotificationActionEnum(str, Enum):
    CREATE_VPC_ENDPOINT_CONNECTION_NOTIFICATION = "CreateVpcEndpointConnectionNotification"

class GetCreateVpcEndpointConnectionNotificationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateVpcEndpointConnectionNotificationQueryParams:
    action: GetCreateVpcEndpointConnectionNotificationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    connection_events: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionEvents', 'style': 'form', 'explode': True }})
    connection_notification_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionNotificationArn', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceId', 'style': 'form', 'explode': True }})
    version: GetCreateVpcEndpointConnectionNotificationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcEndpointId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateVpcEndpointConnectionNotificationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateVpcEndpointConnectionNotificationRequest:
    query_params: GetCreateVpcEndpointConnectionNotificationQueryParams = field(default=None)
    headers: GetCreateVpcEndpointConnectionNotificationHeaders = field(default=None)
    

@dataclass
class GetCreateVpcEndpointConnectionNotificationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
