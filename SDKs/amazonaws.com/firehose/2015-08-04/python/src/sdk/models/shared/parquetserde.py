from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parquetcompression_enum
from . import parquetwriterversion_enum


@dataclass_json
@dataclass
class ParquetSerDe:
    block_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockSizeBytes' }})
    compression: Optional[parquetcompression_enum.ParquetCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compression' }})
    enable_dictionary_compression: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDictionaryCompression' }})
    max_padding_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPaddingBytes' }})
    page_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSizeBytes' }})
    writer_version: Optional[parquetwriterversion_enum.ParquetWriterVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriterVersion' }})
    
