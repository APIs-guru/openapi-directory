from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteVolumeRequest:
    volume_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeId') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    ontap_configuration: Optional[DeleteVolumeOntapConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapConfiguration') }})
    
