from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceDiscovery:
    r"""ServiceDiscovery
    An object that represents the service discovery information for a virtual node.
    """
    
    aws_cloud_map: Optional[AwsCloudMapServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsCloudMap') }})
    dns: Optional[DNSServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns') }})
    
