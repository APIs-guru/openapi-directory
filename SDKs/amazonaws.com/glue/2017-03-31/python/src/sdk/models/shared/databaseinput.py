from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import principalpermissions
from . import databaseidentifier


@dataclass_json
@dataclass
class DatabaseInput:
    create_table_default_permissions: Optional[List[principalpermissions.PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTableDefaultPermissions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationUri' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    target_database: Optional[databaseidentifier.DatabaseIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetDatabase' }})
    
