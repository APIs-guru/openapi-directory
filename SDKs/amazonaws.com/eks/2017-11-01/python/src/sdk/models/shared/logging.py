from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Logging:
    r"""Logging
    An object representing the logging configuration for resources in your cluster.
    """
    
    cluster_logging: Optional[List[LogSetup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterLogging') }})
    
