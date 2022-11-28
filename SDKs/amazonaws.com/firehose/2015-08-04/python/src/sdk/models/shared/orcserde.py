from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrcSerDe:
    r"""OrcSerDe
    A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href=\"https://orc.apache.org/docs/\">Apache ORC</a>.
    """
    
    block_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockSizeBytes') }})
    bloom_filter_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BloomFilterColumns') }})
    bloom_filter_false_positive_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BloomFilterFalsePositiveProbability') }})
    compression: Optional[OrcCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    dictionary_key_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DictionaryKeyThreshold') }})
    enable_padding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnablePadding') }})
    format_version: Optional[OrcFormatVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FormatVersion') }})
    padding_tolerance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingTolerance') }})
    row_index_stride: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowIndexStride') }})
    stripe_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StripeSizeBytes') }})
    
