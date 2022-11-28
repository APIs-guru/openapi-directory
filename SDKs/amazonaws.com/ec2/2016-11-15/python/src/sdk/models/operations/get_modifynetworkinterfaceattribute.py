from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyNetworkInterfaceAttributeActionEnum(str, Enum):
    MODIFY_NETWORK_INTERFACE_ATTRIBUTE = "ModifyNetworkInterfaceAttribute"


@dataclass
class GetModifyNetworkInterfaceAttributeAttachment:
    r"""GetModifyNetworkInterfaceAttributeAttachment
    Describes an attachment change.
    """
    
    attachment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AttachmentId' }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeleteOnTermination' }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeDescription:
    r"""GetModifyNetworkInterfaceAttributeDescription
    Describes a value for a resource attribute that is a String.
    """
    
    value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeSourceDestCheck:
    r"""GetModifyNetworkInterfaceAttributeSourceDestCheck
    Describes a value for a resource attribute that is a Boolean value.
    """
    
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    
class GetModifyNetworkInterfaceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyNetworkInterfaceAttributeQueryParams:
    action: GetModifyNetworkInterfaceAttributeActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetModifyNetworkInterfaceAttributeVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attachment: Optional[GetModifyNetworkInterfaceAttributeAttachment] = field(default=None, metadata={'query_param': { 'field_name': 'Attachment', 'style': 'form', 'explode': True }})
    description: Optional[GetModifyNetworkInterfaceAttributeDescription] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    security_group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SecurityGroupId', 'style': 'form', 'explode': True }})
    source_dest_check: Optional[GetModifyNetworkInterfaceAttributeSourceDestCheck] = field(default=None, metadata={'query_param': { 'field_name': 'SourceDestCheck', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeRequest:
    headers: GetModifyNetworkInterfaceAttributeHeaders = field()
    query_params: GetModifyNetworkInterfaceAttributeQueryParams = field()
    

@dataclass
class GetModifyNetworkInterfaceAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    
