from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationDefinitionSpecificationRead:
    destination_definition_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    job_info: SynchronousJobRead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    connection_specification: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionSpecification') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    supported_destination_sync_modes: Optional[List[DestinationSyncModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedDestinationSyncModes') }})
    supports_dbt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsDbt') }})
    supports_normalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsNormalization') }})
    
