from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeltaSyncConfig:
    base_table_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseTableTTL' }})
    delta_sync_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaSyncTableName' }})
    delta_sync_table_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaSyncTableTTL' }})
    
