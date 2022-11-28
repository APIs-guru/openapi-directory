from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebBackendConnectionRead:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    destination: DestinationRead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    is_syncing: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSyncing') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: SourceRead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    status: ConnectionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sync_catalog: AirbyteCatalog = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncCatalog') }})
    latest_sync_job_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSyncJobCreatedAt') }})
    latest_sync_job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSyncJobStatus') }})
    namespace_definition: Optional[NamespaceDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceDefinition') }})
    namespace_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceFormat') }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    operations: Optional[List[OperationRead]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    resource_requirements: Optional[ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    schedule: Optional[ConnectionSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
