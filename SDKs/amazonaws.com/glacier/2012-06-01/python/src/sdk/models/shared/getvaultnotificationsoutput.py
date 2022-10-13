from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vaultnotificationconfig


@dataclass_json
@dataclass
class GetVaultNotificationsOutput:
    vault_notification_config: Optional[vaultnotificationconfig.VaultNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaultNotificationConfig' }})
    
