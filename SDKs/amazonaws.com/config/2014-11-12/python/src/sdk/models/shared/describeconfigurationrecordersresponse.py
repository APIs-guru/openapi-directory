from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationrecorder


@dataclass_json
@dataclass
class DescribeConfigurationRecordersResponse:
    configuration_recorders: Optional[List[configurationrecorder.ConfigurationRecorder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationRecorders' }})
    
