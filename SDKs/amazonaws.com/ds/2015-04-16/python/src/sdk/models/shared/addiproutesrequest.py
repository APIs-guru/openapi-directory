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
class AddIPRoutesRequest:
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    ip_routes: List[IPRoute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRoutes') }})
    update_security_group_for_directory_controllers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateSecurityGroupForDirectoryControllers') }})
    
