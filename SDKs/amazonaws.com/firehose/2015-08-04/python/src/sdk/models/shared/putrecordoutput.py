from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutRecordOutput:
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    record_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordId' }})
    
