from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyHapgRequest:
    hapg_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HapgArn' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    partition_serial_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionSerialList' }})
    
