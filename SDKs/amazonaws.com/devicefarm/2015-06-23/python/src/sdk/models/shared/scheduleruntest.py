from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import testtype_enum


@dataclass_json
@dataclass
class ScheduleRunTest:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    test_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPackageArn' }})
    test_spec_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSpecArn' }})
    type: testtype_enum.TestTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
