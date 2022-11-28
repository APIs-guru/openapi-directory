from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RebootReplicationInstanceXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_REBOOT_REPLICATION_INSTANCE = "AmazonDMSv20160101.RebootReplicationInstance"


@dataclass
class RebootReplicationInstanceHeaders:
    x_amz_target: RebootReplicationInstanceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RebootReplicationInstanceRequest:
    headers: RebootReplicationInstanceHeaders = field()
    request: shared.RebootReplicationInstanceMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RebootReplicationInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    reboot_replication_instance_response: Optional[shared.RebootReplicationInstanceResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    
