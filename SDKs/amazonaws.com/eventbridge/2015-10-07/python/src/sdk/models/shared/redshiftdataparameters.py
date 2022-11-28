from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedshiftDataParameters:
    r"""RedshiftDataParameters
    These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
    """
    
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    sql: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sql') }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    secret_manager_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretManagerArn') }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WithEvent') }})
    
