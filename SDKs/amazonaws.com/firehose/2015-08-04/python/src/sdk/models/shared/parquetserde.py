from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParquetSerDe:
    r"""ParquetSerDe
    A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href=\"https://parquet.apache.org/documentation/latest/\">Apache Parquet</a>.
    """
    
    block_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockSizeBytes') }})
    compression: Optional[ParquetCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    enable_dictionary_compression: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDictionaryCompression') }})
    max_padding_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPaddingBytes') }})
    page_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSizeBytes') }})
    writer_version: Optional[ParquetWriterVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriterVersion') }})
    
