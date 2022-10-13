from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectoroperator
from . import tasktype_enum


@dataclass_json
@dataclass
class Task:
    connector_operator: Optional[connectoroperator.ConnectorOperator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorOperator' }})
    destination_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationField' }})
    source_fields: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceFields' }})
    task_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskProperties' }})
    task_type: tasktype_enum.TaskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskType' }})
    
