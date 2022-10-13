from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import placementdescription


@dataclass_json
@dataclass
class DescribePlacementResponse:
    placement: placementdescription.PlacementDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement' }})
    
