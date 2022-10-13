from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codeconfiguration
from . import sourcecodeversion


@dataclass_json
@dataclass
class CodeRepository:
    code_configuration: Optional[codeconfiguration.CodeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeConfiguration' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryUrl' }})
    source_code_version: sourcecodeversion.SourceCodeVersion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCodeVersion' }})
    
