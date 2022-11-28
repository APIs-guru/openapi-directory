from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputDataConfig:
    r"""InputDataConfig
    The input properties for an inference job.
    """
    
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    document_reader_config: Optional[DocumentReaderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReaderConfig') }})
    input_format: Optional[InputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFormat') }})
    
