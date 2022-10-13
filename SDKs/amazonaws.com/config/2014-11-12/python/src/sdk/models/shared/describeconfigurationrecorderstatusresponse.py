from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationrecorderstatus


@dataclass_json
@dataclass
class DescribeConfigurationRecorderStatusResponse:
    configuration_recorders_status: Optional[List[configurationrecorderstatus.ConfigurationRecorderStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationRecordersStatus' }})
    
