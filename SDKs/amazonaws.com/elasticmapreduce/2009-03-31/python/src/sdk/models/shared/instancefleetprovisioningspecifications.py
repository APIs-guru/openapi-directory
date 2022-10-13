from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ondemandprovisioningspecification
from . import spotprovisioningspecification


@dataclass_json
@dataclass
class InstanceFleetProvisioningSpecifications:
    on_demand_specification: Optional[ondemandprovisioningspecification.OnDemandProvisioningSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnDemandSpecification' }})
    spot_specification: Optional[spotprovisioningspecification.SpotProvisioningSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpotSpecification' }})
    
