from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentreaderconfig
from . import inputformat_enum


@dataclass_json
@dataclass
class InputDataConfig:
    document_reader_config: Optional[documentreaderconfig.DocumentReaderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentReaderConfig' }})
    input_format: Optional[inputformat_enum.InputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputFormat' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
