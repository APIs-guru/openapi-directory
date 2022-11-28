from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SkewedInfo:
    r"""SkewedInfo
    Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
    """
    
    skewed_column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkewedColumnNames') }})
    skewed_column_value_location_maps: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkewedColumnValueLocationMaps') }})
    skewed_column_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkewedColumnValues') }})
    
