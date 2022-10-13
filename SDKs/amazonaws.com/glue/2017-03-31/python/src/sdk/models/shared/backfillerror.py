from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backfillerrorcode_enum
from . import partitionvaluelist


@dataclass_json
@dataclass
class BackfillError:
    code: Optional[backfillerrorcode_enum.BackfillErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    partitions: Optional[List[partitionvaluelist.PartitionValueList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partitions' }})
    
