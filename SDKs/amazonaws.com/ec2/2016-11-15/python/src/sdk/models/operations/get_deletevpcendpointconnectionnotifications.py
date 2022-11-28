from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDeleteVpcEndpointConnectionNotificationsActionEnum(str, Enum):
    DELETE_VPC_ENDPOINT_CONNECTION_NOTIFICATIONS = "DeleteVpcEndpointConnectionNotifications"

class GetDeleteVpcEndpointConnectionNotificationsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteVpcEndpointConnectionNotificationsQueryParams:
    action: GetDeleteVpcEndpointConnectionNotificationsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    connection_notification_id: List[str] = field(metadata={'query_param': { 'field_name': 'ConnectionNotificationId', 'style': 'form', 'explode': True }})
    version: GetDeleteVpcEndpointConnectionNotificationsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteVpcEndpointConnectionNotificationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteVpcEndpointConnectionNotificationsRequest:
    headers: GetDeleteVpcEndpointConnectionNotificationsHeaders = field()
    query_params: GetDeleteVpcEndpointConnectionNotificationsQueryParams = field()
    

@dataclass
class GetDeleteVpcEndpointConnectionNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
