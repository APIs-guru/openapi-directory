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
class Trust:
    r"""Trust
    Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
    """
    
    created_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    remote_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    selective_auth: Optional[SelectiveAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectiveAuth') }})
    state_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateLastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trust_direction: Optional[TrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustDirection') }})
    trust_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    trust_state: Optional[TrustStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustState') }})
    trust_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustStateReason') }})
    trust_type: Optional[TrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustType') }})
    
