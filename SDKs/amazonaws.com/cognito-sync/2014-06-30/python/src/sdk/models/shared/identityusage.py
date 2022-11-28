from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityUsage:
    r"""IdentityUsage
    Usage information for the identity.
    """
    
    data_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataStorage') }})
    dataset_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetCount') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
