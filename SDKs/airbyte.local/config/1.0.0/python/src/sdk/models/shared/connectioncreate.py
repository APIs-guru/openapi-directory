from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import namespacedefinitiontype_enum
from . import resourcerequirements
from . import connectionschedule
from . import connectionstatus_enum
from . import airbytecatalog


@dataclass_json
@dataclass
class ConnectionCreate:
    destination_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace_definition: Optional[namespacedefinitiontype_enum.NamespaceDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceDefinition' }})
    namespace_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceFormat' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    resource_requirements: Optional[resourcerequirements.ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    schedule: Optional[connectionschedule.ConnectionSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceId' }})
    status: connectionstatus_enum.ConnectionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sync_catalog: Optional[airbytecatalog.AirbyteCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncCatalog' }})
    
