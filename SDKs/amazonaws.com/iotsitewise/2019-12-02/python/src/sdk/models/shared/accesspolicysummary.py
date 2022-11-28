from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessPolicySummary:
    r"""AccessPolicySummary
    Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identity: Identity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    permission: PermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    resource: Resource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
