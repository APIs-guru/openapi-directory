from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schemastatus_enum


@dataclass_json
@dataclass
class GetSchemaCreationStatusResponse:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    status: Optional[schemastatus_enum.SchemaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
