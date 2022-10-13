from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyNetworkInterfaceAttributeActionEnum(str, Enum):
    MODIFY_NETWORK_INTERFACE_ATTRIBUTE = "ModifyNetworkInterfaceAttribute"


@dataclass
class GetModifyNetworkInterfaceAttributeAttachment:
    attachment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AttachmentId' }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeleteOnTermination' }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeDescription:
    value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeSourceDestCheck:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    
class GetModifyNetworkInterfaceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyNetworkInterfaceAttributeQueryParams:
    action: GetModifyNetworkInterfaceAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attachment: Optional[GetModifyNetworkInterfaceAttributeAttachment] = field(default=None, metadata={'query_param': { 'field_name': 'Attachment', 'style': 'form', 'explode': True }})
    description: Optional[GetModifyNetworkInterfaceAttributeDescription] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    security_group_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SecurityGroupId', 'style': 'form', 'explode': True }})
    source_dest_check: Optional[GetModifyNetworkInterfaceAttributeSourceDestCheck] = field(default=None, metadata={'query_param': { 'field_name': 'SourceDestCheck', 'style': 'form', 'explode': True }})
    version: GetModifyNetworkInterfaceAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyNetworkInterfaceAttributeRequest:
    query_params: GetModifyNetworkInterfaceAttributeQueryParams = field(default=None)
    headers: GetModifyNetworkInterfaceAttributeHeaders = field(default=None)
    

@dataclass
class GetModifyNetworkInterfaceAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
