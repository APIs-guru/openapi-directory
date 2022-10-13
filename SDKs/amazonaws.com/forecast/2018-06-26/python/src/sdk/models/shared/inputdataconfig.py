from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supplementaryfeature


@dataclass_json
@dataclass
class InputDataConfig:
    dataset_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroupArn' }})
    supplementary_features: Optional[List[supplementaryfeature.SupplementaryFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryFeatures' }})
    
