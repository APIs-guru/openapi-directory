from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourceauth
from . import buildstatusconfig
from . import gitsubmodulesconfig
from . import sourcetype_enum


@dataclass_json
@dataclass
class ProjectSource:
    auth: Optional[sourceauth.SourceAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    build_status_config: Optional[buildstatusconfig.BuildStatusConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStatusConfig' }})
    buildspec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildspec' }})
    git_clone_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitCloneDepth' }})
    git_submodules_config: Optional[gitsubmodulesconfig.GitSubmodulesConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitSubmodulesConfig' }})
    insecure_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecureSsl' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    report_build_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportBuildStatus' }})
    source_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceIdentifier' }})
    type: sourcetype_enum.SourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
