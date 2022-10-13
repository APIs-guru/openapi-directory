from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartSchemaExtensionRequest:
    create_snapshot_before_schema_extension: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateSnapshotBeforeSchemaExtension' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    ldif_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LdifContent' }})
    
