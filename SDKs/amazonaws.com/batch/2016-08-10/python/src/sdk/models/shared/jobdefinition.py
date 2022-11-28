from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobDefinition:
    r"""JobDefinition
    An object representing an Batch job definition.
    """
    
    job_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionArn') }})
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionName') }})
    revision: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    container_properties: Optional[ContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerProperties') }})
    node_properties: Optional[NodeProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[List[PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[JobTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
