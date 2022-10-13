from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutSchemaVersionMetadataResponse:
    latest_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestVersion' }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataKey' }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataValue' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryName' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNumber' }})
    
