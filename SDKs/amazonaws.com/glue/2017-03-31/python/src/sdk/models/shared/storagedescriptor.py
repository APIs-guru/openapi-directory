from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StorageDescriptor:
    r"""StorageDescriptor
    Describes the physical storage of table data.
    """
    
    bucket_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketColumns') }})
    columns: Optional[List[Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Columns') }})
    compressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compressed') }})
    input_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFormat') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    number_of_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfBuckets') }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    schema_reference: Optional[SchemaReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaReference') }})
    serde_info: Optional[SerDeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerdeInfo') }})
    skewed_info: Optional[SkewedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkewedInfo') }})
    sort_columns: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortColumns') }})
    stored_as_sub_directories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredAsSubDirectories') }})
    
