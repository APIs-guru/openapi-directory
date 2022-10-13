from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyReplicationSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_REPLICATION_SUBNET_GROUP = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"


@dataclass
class ModifyReplicationSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ModifyReplicationSubnetGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ModifyReplicationSubnetGroupRequest:
    headers: ModifyReplicationSubnetGroupHeaders = field(default=None)
    request: shared.ModifyReplicationSubnetGroupMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyReplicationSubnetGroupResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_subnet: Optional[Any] = field(default=None)
    modify_replication_subnet_group_response: Optional[shared.ModifyReplicationSubnetGroupResponse] = field(default=None)
    replication_subnet_group_does_not_cover_enough_a_zs: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subnet_already_in_use: Optional[Any] = field(default=None)
    
