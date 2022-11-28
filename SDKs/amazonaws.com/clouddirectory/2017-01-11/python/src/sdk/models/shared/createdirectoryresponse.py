from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDirectoryResponse:
    applied_schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedSchemaArn') }})
    directory_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    object_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    
