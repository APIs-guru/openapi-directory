from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ModifyReplicationInstanceXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_REPLICATION_INSTANCE = "AmazonDMSv20160101.ModifyReplicationInstance"


@dataclass
class ModifyReplicationInstanceHeaders:
    x_amz_target: ModifyReplicationInstanceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyReplicationInstanceRequest:
    headers: ModifyReplicationInstanceHeaders = field()
    request: shared.ModifyReplicationInstanceMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyReplicationInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_fault: Optional[Any] = field(default=None)
    insufficient_resource_capacity_fault: Optional[Any] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    modify_replication_instance_response: Optional[shared.ModifyReplicationInstanceResponse] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    storage_quota_exceeded_fault: Optional[Any] = field(default=None)
    upgrade_dependency_failure_fault: Optional[Any] = field(default=None)
    
