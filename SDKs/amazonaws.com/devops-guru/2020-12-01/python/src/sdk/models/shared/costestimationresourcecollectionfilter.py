from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudformationcostestimationresourcecollectionfilter


@dataclass_json
@dataclass
class CostEstimationResourceCollectionFilter:
    cloud_formation: Optional[cloudformationcostestimationresourcecollectionfilter.CloudFormationCostEstimationResourceCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormation' }})
    
