from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import featurizationmethod


@dataclass_json
@dataclass
class Featurization:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    featurization_pipeline: Optional[List[featurizationmethod.FeaturizationMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturizationPipeline' }})
    
