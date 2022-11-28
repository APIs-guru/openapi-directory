from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CurrentRevision:
    r"""CurrentRevision
    Represents information about a current revision.
    """
    
    change_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeIdentifier') }})
    revision: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revision_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionSummary') }})
    
