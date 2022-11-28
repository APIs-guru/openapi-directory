from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionRevision:
    r"""ActionRevision
    Represents information about the version (or revision) of an action.
    """
    
    created: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revision_change_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionChangeId') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
