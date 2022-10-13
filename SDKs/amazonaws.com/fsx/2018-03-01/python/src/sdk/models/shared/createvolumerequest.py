from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createontapvolumeconfiguration
from . import tag
from . import volumetype_enum


@dataclass_json
@dataclass
class CreateVolumeRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    ontap_configuration: Optional[createontapvolumeconfiguration.CreateOntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_type: volumetype_enum.VolumeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
