from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentReaderConfig:
    r"""DocumentReaderConfig
    The input properties for a topic detection job.
    """
    
    document_read_action: DocumentReadActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReadAction') }})
    document_read_mode: Optional[DocumentReadModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReadMode') }})
    feature_types: Optional[List[DocumentReadFeatureTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureTypes') }})
    
