from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyVpcEndpointConnectionNotificationActionEnum(str, Enum):
    MODIFY_VPC_ENDPOINT_CONNECTION_NOTIFICATION = "ModifyVpcEndpointConnectionNotification"

class GetModifyVpcEndpointConnectionNotificationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcEndpointConnectionNotificationQueryParams:
    action: GetModifyVpcEndpointConnectionNotificationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    connection_events: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionEvents', 'style': 'form', 'explode': True }})
    connection_notification_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionNotificationArn', 'style': 'form', 'explode': True }})
    connection_notification_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ConnectionNotificationId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetModifyVpcEndpointConnectionNotificationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcEndpointConnectionNotificationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyVpcEndpointConnectionNotificationRequest:
    query_params: GetModifyVpcEndpointConnectionNotificationQueryParams = field(default=None)
    headers: GetModifyVpcEndpointConnectionNotificationHeaders = field(default=None)
    

@dataclass
class GetModifyVpcEndpointConnectionNotificationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
