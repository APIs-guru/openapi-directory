from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebBackendOperationCreateOrUpdate:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator_configuration: OperatorConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorConfiguration') }})
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    
