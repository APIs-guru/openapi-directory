from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeRepository:
    r"""CodeRepository
    Describes a source code repository.
    """
    
    repository_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryUrl') }})
    source_code_version: SourceCodeVersion = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCodeVersion') }})
    code_configuration: Optional[CodeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeConfiguration') }})
    
