from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetVaultNotificationsOutput:
    r"""GetVaultNotificationsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    vault_notification_config: Optional[VaultNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaultNotificationConfig') }})
    
