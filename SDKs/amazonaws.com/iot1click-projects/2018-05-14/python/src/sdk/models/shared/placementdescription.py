from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlacementDescription:
    r"""PlacementDescription
    An object describing a project's placement.
    """
    
    attributes: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    created_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    placement_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementName') }})
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    updated_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
