from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstatus_enum
from . import providertype_enum


@dataclass_json
@dataclass
class Connection:
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionName' }})
    connection_status: Optional[connectionstatus_enum.ConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionStatus' }})
    host_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostArn' }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccountId' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    
