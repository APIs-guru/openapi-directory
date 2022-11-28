from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionInput:
    r"""ConnectionInput
    A structure that is used to specify a connection to create or update.
    """
    
    connection_properties: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionProperties') }})
    connection_type: ConnectionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    match_criteria: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchCriteria') }})
    physical_connection_requirements: Optional[PhysicalConnectionRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalConnectionRequirements') }})
    
