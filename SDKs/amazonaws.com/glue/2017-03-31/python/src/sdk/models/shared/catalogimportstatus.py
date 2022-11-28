from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CatalogImportStatus:
    r"""CatalogImportStatus
    A structure containing migration status information.
    """
    
    import_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportCompleted') }})
    import_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    imported_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedBy') }})
    
