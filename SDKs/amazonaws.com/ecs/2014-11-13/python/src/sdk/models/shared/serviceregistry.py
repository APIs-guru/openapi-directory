from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceRegistry:
    r"""ServiceRegistry
    Details of the service registry.
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryArn') }})
    
