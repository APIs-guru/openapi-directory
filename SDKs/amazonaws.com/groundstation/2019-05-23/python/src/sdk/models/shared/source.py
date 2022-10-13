from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configdetails
from . import configcapabilitytype_enum


@dataclass_json
@dataclass
class Source:
    config_details: Optional[configdetails.ConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configDetails' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_type: Optional[configcapabilitytype_enum.ConfigCapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    dataflow_source_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowSourceRegion' }})
    
