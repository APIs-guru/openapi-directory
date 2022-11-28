from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatasetContentVersionValue:
    r"""DatasetContentVersionValue
    The dataset whose latest contents are used as input to the notebook or application.
    """
    
    dataset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetName') }})
    
