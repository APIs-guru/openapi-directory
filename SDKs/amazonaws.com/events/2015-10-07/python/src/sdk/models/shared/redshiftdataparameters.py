from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RedshiftDataParameters:
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    secret_manager_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretManagerArn' }})
    sql: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sql' }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WithEvent' }})
    
