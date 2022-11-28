from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuiteDefinitionConfiguration:
    r"""SuiteDefinitionConfiguration
    Gets Suite Definition Configuration.
    """
    
    device_permission_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePermissionRoleArn') }})
    devices: Optional[List[DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedForQualification') }})
    root_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootGroup') }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionName') }})
    
