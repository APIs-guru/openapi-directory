from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicasettingsdescription


@dataclass_json
@dataclass
class UpdateGlobalTableSettingsOutput:
    global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    replica_settings: Optional[List[replicasettingsdescription.ReplicaSettingsDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaSettings' }})
    
