from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Specifies the encryption settings for shared snapshots that are copied across Regions.
    """
    
    encrypted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    cmk_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CmkArn') }})
    
