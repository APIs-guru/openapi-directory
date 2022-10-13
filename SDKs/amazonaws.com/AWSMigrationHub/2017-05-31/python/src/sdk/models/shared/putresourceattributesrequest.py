from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceattribute


@dataclass_json
@dataclass
class PutResourceAttributesRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    migration_task_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    progress_update_stream: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    resource_attribute_list: List[resourceattribute.ResourceAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceAttributeList' }})
    
