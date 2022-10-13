from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceundertest


@dataclass_json
@dataclass
class SuiteRunConfiguration:
    primary_device: Optional[deviceundertest.DeviceUnderTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDevice' }})
    selected_test_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedTestList' }})
    
