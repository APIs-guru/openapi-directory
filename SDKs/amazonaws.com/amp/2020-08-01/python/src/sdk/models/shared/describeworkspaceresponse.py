from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeWorkspaceResponse:
    r"""DescribeWorkspaceResponse
    Represents the output of a DescribeWorkspace operation.
    """
    
    workspace: WorkspaceDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
