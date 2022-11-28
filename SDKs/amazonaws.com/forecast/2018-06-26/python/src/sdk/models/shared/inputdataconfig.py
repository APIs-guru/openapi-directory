from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputDataConfig:
    r"""InputDataConfig
    The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
    """
    
    dataset_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetGroupArn') }})
    supplementary_features: Optional[List[SupplementaryFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryFeatures') }})
    
