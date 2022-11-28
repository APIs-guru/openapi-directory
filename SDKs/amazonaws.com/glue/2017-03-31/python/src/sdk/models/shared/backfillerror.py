from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackfillError:
    r"""BackfillError
    <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul>
    """
    
    code: Optional[BackfillErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    partitions: Optional[List[PartitionValueList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Partitions') }})
    
