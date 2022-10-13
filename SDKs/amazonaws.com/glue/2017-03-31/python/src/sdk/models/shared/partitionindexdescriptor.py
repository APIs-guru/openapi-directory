from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backfillerror
from . import partitionindexstatus_enum
from . import keyschemaelement


@dataclass_json
@dataclass
class PartitionIndexDescriptor:
    backfill_errors: Optional[List[backfillerror.BackfillError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackfillErrors' }})
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_status: partitionindexstatus_enum.PartitionIndexStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexStatus' }})
    keys: List[keyschemaelement.KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    
