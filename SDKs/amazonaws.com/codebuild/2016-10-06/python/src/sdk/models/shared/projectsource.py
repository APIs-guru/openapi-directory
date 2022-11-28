from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectSource:
    r"""ProjectSource
    Information about the build input source code for the build project.
    """
    
    type: SourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    auth: Optional[SourceAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    build_status_config: Optional[BuildStatusConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatusConfig') }})
    buildspec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildspec') }})
    git_clone_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCloneDepth') }})
    git_submodules_config: Optional[GitSubmodulesConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitSubmodulesConfig') }})
    insecure_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecureSsl') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    report_build_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBuildStatus') }})
    source_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceIdentifier') }})
    
