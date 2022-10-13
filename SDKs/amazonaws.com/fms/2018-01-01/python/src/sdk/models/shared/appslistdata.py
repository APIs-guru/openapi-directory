from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import app
from . import app


@dataclass_json
@dataclass
class AppsListData:
    apps_list: List[app.App] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsList' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListId' }})
    list_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListName' }})
    list_update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListUpdateToken' }})
    previous_apps_list: Optional[dict[str, List[app.App]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousAppsList' }})
    
