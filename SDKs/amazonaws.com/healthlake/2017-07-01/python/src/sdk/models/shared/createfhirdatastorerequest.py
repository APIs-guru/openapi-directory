from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFhirDatastoreRequest:
    datastore_type_version: FhirVersionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreTypeVersion') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreName') }})
    preload_data_config: Optional[PreloadDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataConfig') }})
    sse_configuration: Optional[SseConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
