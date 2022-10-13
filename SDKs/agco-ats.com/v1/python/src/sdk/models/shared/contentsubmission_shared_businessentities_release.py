from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesRelease:
    build_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'BuildDate' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ReleaseDate' }})
    release_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseID' }, 'form': { 'field_name': 'ReleaseID' }})
    release_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseNumber' }, 'form': { 'field_name': 'ReleaseNumber' }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Visible' }, 'form': { 'field_name': 'Visible' }})
    
