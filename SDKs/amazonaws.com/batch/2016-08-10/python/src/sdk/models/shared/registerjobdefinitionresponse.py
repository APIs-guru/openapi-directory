from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterJobDefinitionResponse:
    job_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitionArn' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitionName' }})
    revision: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
