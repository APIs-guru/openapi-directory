from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdatePartitionRequestEntry:
    r"""BatchUpdatePartitionRequestEntry
    A structure that contains the values and structure used to update a partition.
    """
    
    partition_input: PartitionInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionInput') }})
    partition_value_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValueList') }})
    
