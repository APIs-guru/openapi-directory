from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compatibility_enum
from . import dataformat_enum
from . import schemastatus_enum
from . import schemaversionstatus_enum


@dataclass_json
@dataclass
class CreateSchemaResponse:
    compatibility: Optional[compatibility_enum.CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compatibility' }})
    data_format: Optional[dataformat_enum.DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    latest_schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestSchemaVersion' }})
    next_schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextSchemaVersion' }})
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryArn' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryName' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    schema_checkpoint: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaCheckpoint' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    schema_status: Optional[schemastatus_enum.SchemaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaStatus' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    schema_version_status: Optional[schemaversionstatus_enum.SchemaVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionStatus' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
