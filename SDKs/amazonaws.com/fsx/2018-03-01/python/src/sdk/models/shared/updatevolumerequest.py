from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updateontapvolumeconfiguration


@dataclass_json
@dataclass
class UpdateVolumeRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    ontap_configuration: Optional[updateontapvolumeconfiguration.UpdateOntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    volume_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeId' }})
    
