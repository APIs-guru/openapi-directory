from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import synchronousjobread
from . import destinationsyncmode_enum


@dataclass_json
@dataclass
class DestinationDefinitionSpecificationRead:
    connection_specification: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionSpecification' }})
    destination_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitionId' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationUrl' }})
    job_info: synchronousjobread.SynchronousJobRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInfo' }})
    supported_destination_sync_modes: Optional[List[destinationsyncmode_enum.DestinationSyncModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedDestinationSyncModes' }})
    supports_dbt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsDbt' }})
    supports_normalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsNormalization' }})
    
