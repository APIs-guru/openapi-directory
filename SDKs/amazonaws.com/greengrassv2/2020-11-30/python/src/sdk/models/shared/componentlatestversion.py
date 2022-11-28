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
class ComponentLatestVersion:
    r"""ComponentLatestVersion
    Contains information about the latest version of a component.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    platforms: Optional[List[ComponentPlatform]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    
