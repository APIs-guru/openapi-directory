from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerdatasetaction
from . import sqlquerydatasetaction


@dataclass_json
@dataclass
class DatasetAction:
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    container_action: Optional[containerdatasetaction.ContainerDatasetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerAction' }})
    query_action: Optional[sqlquerydatasetaction.SQLQueryDatasetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryAction' }})
    
