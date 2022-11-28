from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDatasetRequest:
    dataset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    dataset_type: DatasetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetType') }})
    domain: DomainEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    schema: Schema = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schema') }})
    data_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFrequency') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
