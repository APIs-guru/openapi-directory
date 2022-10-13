from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import refreshschemasstatus


@dataclass_json
@dataclass
class RefreshSchemasResponse:
    refresh_schemas_status: Optional[refreshschemasstatus.RefreshSchemasStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshSchemasStatus' }})
    
