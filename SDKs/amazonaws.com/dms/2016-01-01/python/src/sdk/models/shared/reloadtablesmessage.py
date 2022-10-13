from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reloadoptionvalue_enum
from . import tabletoreload


@dataclass_json
@dataclass
class ReloadTablesMessage:
    reload_option: Optional[reloadoptionvalue_enum.ReloadOptionValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReloadOption' }})
    replication_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    tables_to_reload: List[tabletoreload.TableToReload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesToReload' }})
    
