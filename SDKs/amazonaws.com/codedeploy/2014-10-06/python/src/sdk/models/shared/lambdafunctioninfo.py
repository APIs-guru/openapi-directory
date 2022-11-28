from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaFunctionInfo:
    r"""LambdaFunctionInfo
     Information about a Lambda function specified in a deployment. 
    """
    
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    function_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionAlias') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersion') }})
    target_version_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersionWeight') }})
    
