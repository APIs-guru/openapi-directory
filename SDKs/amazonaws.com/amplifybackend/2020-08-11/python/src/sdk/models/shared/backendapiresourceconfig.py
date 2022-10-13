from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backendapiauthtype
from . import backendapiconflictresolution
from . import backendapiauthtype


@dataclass_json
@dataclass
class BackendAPIResourceConfig:
    additional_auth_types: Optional[List[backendapiauthtype.BackendAPIAuthType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalAuthTypes' }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiName' }})
    conflict_resolution: Optional[backendapiconflictresolution.BackendAPIConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConflictResolution' }})
    default_auth_type: Optional[backendapiauthtype.BackendAPIAuthType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAuthType' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    transform_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformSchema' }})
    
