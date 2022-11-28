from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    r"""Location
    The location of resources.
    """
    
    dynamo_db: Optional[List[CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDB') }})
    jdbc: Optional[List[CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jdbc') }})
    s3: Optional[List[CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    
