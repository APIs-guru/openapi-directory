from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatabaseInput:
    r"""DatabaseInput
    The structure used to create or update a database.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    create_table_default_permissions: Optional[List[PrincipalPermissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTableDefaultPermissions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationUri') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    target_database: Optional[DatabaseIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetDatabase') }})
    
