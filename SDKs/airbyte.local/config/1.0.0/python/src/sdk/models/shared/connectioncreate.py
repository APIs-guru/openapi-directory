from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionCreate:
    destination_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    status: ConnectionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    namespace_definition: Optional[NamespaceDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceDefinition') }})
    namespace_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceFormat') }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    resource_requirements: Optional[ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    schedule: Optional[ConnectionSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    sync_catalog: Optional[AirbyteCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncCatalog') }})
    
