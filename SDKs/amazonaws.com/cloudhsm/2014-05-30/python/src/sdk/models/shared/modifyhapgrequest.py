from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyHapgRequest:
    hapg_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    partition_serial_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionSerialList') }})
    
