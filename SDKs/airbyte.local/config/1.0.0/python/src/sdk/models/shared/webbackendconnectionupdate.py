from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import namespacedefinitiontype_enum
from . import webbackendoperationcreateorupdate
from . import resourcerequirements
from . import connectionschedule
from . import connectionstatus_enum
from . import airbytecatalog


@dataclass_json
@dataclass
class WebBackendConnectionUpdate:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    namespace_definition: Optional[namespacedefinitiontype_enum.NamespaceDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceDefinition' }})
    namespace_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceFormat' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    operations: Optional[List[webbackendoperationcreateorupdate.WebBackendOperationCreateOrUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    resource_requirements: Optional[resourcerequirements.ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    schedule: Optional[connectionschedule.ConnectionSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    status: connectionstatus_enum.ConnectionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sync_catalog: airbytecatalog.AirbyteCatalog = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncCatalog' }})
    with_refreshed_catalog: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withRefreshedCatalog' }})
    
