from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import upsertaction_enum


@dataclass_json
@dataclass
class UpsertRowsResult:
    row_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowIds' }})
    upsert_action: upsertaction_enum.UpsertActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upsertAction' }})
    
