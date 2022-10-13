from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SkewedInfo:
    skewed_column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkewedColumnNames' }})
    skewed_column_value_location_maps: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkewedColumnValueLocationMaps' }})
    skewed_column_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkewedColumnValues' }})
    
