from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orccompression_enum
from . import orcformatversion_enum


@dataclass_json
@dataclass
class OrcSerDe:
    block_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockSizeBytes' }})
    bloom_filter_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BloomFilterColumns' }})
    bloom_filter_false_positive_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BloomFilterFalsePositiveProbability' }})
    compression: Optional[orccompression_enum.OrcCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compression' }})
    dictionary_key_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DictionaryKeyThreshold' }})
    enable_padding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePadding' }})
    format_version: Optional[orcformatversion_enum.OrcFormatVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FormatVersion' }})
    padding_tolerance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaddingTolerance' }})
    row_index_stride: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RowIndexStride' }})
    stripe_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StripeSizeBytes' }})
    
