from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dataformat_enum
from . import schemaversionstatus_enum


@dataclass_json
@dataclass
class GetSchemaVersionResponse:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    data_format: Optional[dataformat_enum.DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    schema_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDefinition' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    status: Optional[schemaversionstatus_enum.SchemaVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNumber' }})
    
