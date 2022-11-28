from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackendAPIResourceConfig:
    r"""BackendAPIResourceConfig
    The resource config for the data model, configured as a part of the Amplify project.
    """
    
    additional_auth_types: Optional[List[BackendAPIAuthType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalAuthTypes') }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiName') }})
    conflict_resolution: Optional[BackendAPIConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictResolution') }})
    default_auth_type: Optional[BackendAPIAuthType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAuthType') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    transform_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformSchema') }})
    
