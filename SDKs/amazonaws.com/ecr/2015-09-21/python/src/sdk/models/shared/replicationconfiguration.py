from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import replicationrule


@dataclass_json
@dataclass
class ReplicationConfiguration:
    rules: List[replicationrule.ReplicationRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
