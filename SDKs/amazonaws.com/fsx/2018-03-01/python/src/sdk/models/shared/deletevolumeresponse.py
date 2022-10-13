from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import volumelifecycle_enum
from . import deletevolumeontapresponse


@dataclass_json
@dataclass
class DeleteVolumeResponse:
    lifecycle: Optional[volumelifecycle_enum.VolumeLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    ontap_response: Optional[deletevolumeontapresponse.DeleteVolumeOntapResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapResponse' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeId' }})
    
