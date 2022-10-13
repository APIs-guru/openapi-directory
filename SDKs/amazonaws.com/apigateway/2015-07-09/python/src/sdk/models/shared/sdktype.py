from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sdkconfigurationproperty


@dataclass_json
@dataclass
class SdkType:
    configuration_properties: Optional[List[sdkconfigurationproperty.SdkConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationProperties' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
