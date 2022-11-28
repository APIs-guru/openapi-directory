from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateVolumeRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    volume_type: VolumeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    ontap_configuration: Optional[CreateOntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
