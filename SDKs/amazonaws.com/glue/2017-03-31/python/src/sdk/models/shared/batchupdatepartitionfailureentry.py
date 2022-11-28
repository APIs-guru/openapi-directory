from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdatePartitionFailureEntry:
    r"""BatchUpdatePartitionFailureEntry
    Contains information about a batch update partition error.
    """
    
    error_detail: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    partition_value_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValueList') }})
    
