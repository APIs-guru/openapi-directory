from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartSchemaExtensionRequest:
    create_snapshot_before_schema_extension: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateSnapshotBeforeSchemaExtension') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    ldif_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LdifContent') }})
    
