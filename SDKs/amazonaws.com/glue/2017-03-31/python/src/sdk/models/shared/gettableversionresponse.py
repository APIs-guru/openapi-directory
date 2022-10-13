from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tableversion


@dataclass_json
@dataclass
class GetTableVersionResponse:
    table_version: Optional[tableversion.TableVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableVersion' }})
    
