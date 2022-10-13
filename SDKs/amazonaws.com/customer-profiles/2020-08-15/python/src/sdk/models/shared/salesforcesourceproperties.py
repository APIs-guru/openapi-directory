from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SalesforceSourceProperties:
    enable_dynamic_field_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDynamicFieldUpdate' }})
    include_deleted_records: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeDeletedRecords' }})
    object: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Object' }})
    
