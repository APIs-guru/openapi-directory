from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
