from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSchemaResponse:
    compatibility: Optional[CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compatibility') }})
    data_format: Optional[DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    latest_schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestSchemaVersion') }})
    next_schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextSchemaVersion') }})
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryArn') }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryName') }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    schema_checkpoint: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaCheckpoint') }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaName') }})
    schema_status: Optional[SchemaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaStatus') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_status: Optional[SchemaVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionStatus') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
