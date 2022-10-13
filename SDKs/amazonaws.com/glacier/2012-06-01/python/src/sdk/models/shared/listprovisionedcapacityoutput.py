from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisionedcapacitydescription


@dataclass_json
@dataclass
class ListProvisionedCapacityOutput:
    provisioned_capacity_list: Optional[List[provisionedcapacitydescription.ProvisionedCapacityDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedCapacityList' }})
    
