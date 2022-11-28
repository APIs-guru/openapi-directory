from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtendedKeyUsage:
    r"""ExtendedKeyUsage
    Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
    """
    
    extended_key_usage_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsageObjectIdentifier') }})
    extended_key_usage_type: Optional[ExtendedKeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsageType') }})
    
