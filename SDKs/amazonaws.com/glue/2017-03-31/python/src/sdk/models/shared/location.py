from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codegennodearg
from . import codegennodearg
from . import codegennodearg


@dataclass_json
@dataclass
class Location:
    dynamo_db: Optional[List[codegennodearg.CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamoDB' }})
    jdbc: Optional[List[codegennodearg.CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jdbc' }})
    s3: Optional[List[codegennodearg.CodeGenNodeArg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3' }})
    
