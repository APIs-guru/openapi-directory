from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fhirversion_enum
from . import preloaddataconfig
from . import sseconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateFhirDatastoreRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreName' }})
    datastore_type_version: fhirversion_enum.FhirVersionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreTypeVersion' }})
    preload_data_config: Optional[preloaddataconfig.PreloadDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreloadDataConfig' }})
    sse_configuration: Optional[sseconfiguration.SseConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SseConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
