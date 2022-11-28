from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DebugSession:
    r"""DebugSession
    Contains information about the debug session for a build. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html\">Viewing a running build in Session Manager</a>.
    """
    
    session_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionEnabled') }})
    session_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionTarget') }})
    
