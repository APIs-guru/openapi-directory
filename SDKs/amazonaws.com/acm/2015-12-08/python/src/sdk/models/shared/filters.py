from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filters:
    r"""Filters
    This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
    """
    
    extended_key_usage: Optional[List[ExtendedKeyUsageNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedKeyUsage') }})
    key_types: Optional[List[KeyAlgorithmEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTypes') }})
    key_usage: Optional[List[KeyUsageNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUsage') }})
    
