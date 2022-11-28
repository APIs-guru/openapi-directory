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
class AppsListData:
    r"""AppsListData
    An Firewall Manager applications list.
    """
    
    apps_list: List[App] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsList') }})
    list_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListName') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListId') }})
    list_update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListUpdateToken') }})
    previous_apps_list: Optional[dict[str, List[App]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousAppsList') }})
    
