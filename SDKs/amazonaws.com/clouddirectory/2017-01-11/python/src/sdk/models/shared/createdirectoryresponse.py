from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDirectoryResponse:
    applied_schema_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppliedSchemaArn' }})
    directory_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    object_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectIdentifier' }})
    
