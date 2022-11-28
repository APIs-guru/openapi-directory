from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoricalParameterRange:
    r"""CategoricalParameterRange
    Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
