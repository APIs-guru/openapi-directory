from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceundertest


@dataclass_json
@dataclass
class SuiteDefinitionConfiguration:
    device_permission_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePermissionRoleArn' }})
    devices: Optional[List[deviceundertest.DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedForQualification' }})
    root_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootGroup' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    
