from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_DELETE_SUBNET_GROUP = "AmazonDAXV3.DeleteSubnetGroup"


@dataclass
class DeleteSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteSubnetGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteSubnetGroupRequest:
    headers: DeleteSubnetGroupHeaders = field(default=None)
    request: shared.DeleteSubnetGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteSubnetGroupResponse:
    content_type: str = field(default=None)
    delete_subnet_group_response: Optional[shared.DeleteSubnetGroupResponse] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subnet_group_in_use_fault: Optional[Any] = field(default=None)
    subnet_group_not_found_fault: Optional[Any] = field(default=None)
    
