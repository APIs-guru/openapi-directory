from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationread
from . import jobstatus_enum
from . import namespacedefinitiontype_enum
from . import operationread
from . import resourcerequirements
from . import connectionschedule
from . import sourceread
from . import connectionstatus_enum
from . import airbytecatalog


@dataclass_json
@dataclass
class WebBackendConnectionRead:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    destination: destinationread.DestinationRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    is_syncing: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSyncing' }})
    latest_sync_job_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestSyncJobCreatedAt' }})
    latest_sync_job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestSyncJobStatus' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace_definition: Optional[namespacedefinitiontype_enum.NamespaceDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceDefinition' }})
    namespace_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceFormat' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    operations: Optional[List[operationread.OperationRead]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    resource_requirements: Optional[resourcerequirements.ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    schedule: Optional[connectionschedule.ConnectionSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    source: sourceread.SourceRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceId' }})
    status: connectionstatus_enum.ConnectionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sync_catalog: airbytecatalog.AirbyteCatalog = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncCatalog' }})
    
