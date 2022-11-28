from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    The encryption configuration for the cluster.
    """
    
    provider: Optional[Provider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
