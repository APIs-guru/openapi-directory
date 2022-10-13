from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import column
from . import schemareference
from . import serdeinfo
from . import skewedinfo
from . import order


@dataclass_json
@dataclass
class StorageDescriptor:
    bucket_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketColumns' }})
    columns: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Columns' }})
    compressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compressed' }})
    input_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputFormat' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    number_of_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfBuckets' }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormat' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    schema_reference: Optional[schemareference.SchemaReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaReference' }})
    serde_info: Optional[serdeinfo.SerDeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerdeInfo' }})
    skewed_info: Optional[skewedinfo.SkewedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkewedInfo' }})
    sort_columns: Optional[List[order.Order]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortColumns' }})
    stored_as_sub_directories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoredAsSubDirectories' }})
    
