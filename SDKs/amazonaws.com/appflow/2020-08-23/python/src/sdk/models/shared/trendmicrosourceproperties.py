from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrendmicroSourceProperties:
    r"""TrendmicroSourceProperties
     The properties that are applied when using Trend Micro as a flow source. 
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
