from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerproperties
from . import nodeproperties
from . import platformcapability_enum
from . import retrystrategy
from . import jobtimeout


@dataclass_json
@dataclass
class JobDefinition:
    container_properties: Optional[containerproperties.ContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerProperties' }})
    job_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitionArn' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitionName' }})
    node_properties: Optional[nodeproperties.NodeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeProperties' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    platform_capabilities: Optional[List[platformcapability_enum.PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformCapabilities' }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    retry_strategy: Optional[retrystrategy.RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    revision: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout: Optional[jobtimeout.JobTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
