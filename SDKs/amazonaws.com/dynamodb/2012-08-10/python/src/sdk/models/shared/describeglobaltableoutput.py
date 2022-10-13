from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import globaltabledescription


@dataclass_json
@dataclass
class DescribeGlobalTableOutput:
    global_table_description: Optional[globaltabledescription.GlobalTableDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableDescription' }})
    
