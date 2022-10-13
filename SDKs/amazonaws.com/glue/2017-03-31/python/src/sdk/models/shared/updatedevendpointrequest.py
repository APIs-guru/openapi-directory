from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devendpointcustomlibraries


@dataclass_json
@dataclass
class UpdateDevEndpointRequest:
    add_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddArguments' }})
    add_public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddPublicKeys' }})
    custom_libraries: Optional[devendpointcustomlibraries.DevEndpointCustomLibraries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomLibraries' }})
    delete_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteArguments' }})
    delete_public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletePublicKeys' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    update_etl_libraries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateEtlLibraries' }})
    
