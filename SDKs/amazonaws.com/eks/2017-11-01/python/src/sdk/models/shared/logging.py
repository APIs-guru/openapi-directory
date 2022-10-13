from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logsetup


@dataclass_json
@dataclass
class Logging:
    cluster_logging: Optional[List[logsetup.LogSetup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterLogging' }})
    
