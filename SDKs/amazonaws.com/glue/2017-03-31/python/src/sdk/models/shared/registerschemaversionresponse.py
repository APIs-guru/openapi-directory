from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schemaversionstatus_enum


@dataclass_json
@dataclass
class RegisterSchemaVersionResponse:
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    status: Optional[schemaversionstatus_enum.SchemaVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNumber' }})
    
