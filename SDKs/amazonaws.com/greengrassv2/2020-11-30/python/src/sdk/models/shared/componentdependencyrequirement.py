from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComponentDependencyRequirement:
    r"""ComponentDependencyRequirement
    Contains information about a component dependency for a Lambda function component.
    """
    
    dependency_type: Optional[ComponentDependencyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    version_requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionRequirement') }})
    
