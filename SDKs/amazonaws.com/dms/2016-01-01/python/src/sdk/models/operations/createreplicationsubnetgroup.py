from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateReplicationSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_CREATE_REPLICATION_SUBNET_GROUP = "AmazonDMSv20160101.CreateReplicationSubnetGroup"


@dataclass
class CreateReplicationSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateReplicationSubnetGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateReplicationSubnetGroupRequest:
    headers: CreateReplicationSubnetGroupHeaders = field(default=None)
    request: shared.CreateReplicationSubnetGroupMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateReplicationSubnetGroupResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_replication_subnet_group_response: Optional[shared.CreateReplicationSubnetGroupResponse] = field(default=None)
    invalid_subnet: Optional[Any] = field(default=None)
    replication_subnet_group_does_not_cover_enough_a_zs: Optional[Any] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
