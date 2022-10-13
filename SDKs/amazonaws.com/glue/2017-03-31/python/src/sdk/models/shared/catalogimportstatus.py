from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogImportStatus:
    import_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportCompleted' }})
    import_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    imported_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedBy' }})
    
