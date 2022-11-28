from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetAttributes:
    r"""AssetAttributes
    A collection of attributes of the host from which the finding is generated.
    """
    
    schema_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiId') }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ipv4_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Addresses') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
