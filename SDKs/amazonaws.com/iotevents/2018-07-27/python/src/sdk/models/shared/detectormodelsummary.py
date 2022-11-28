from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectorModelSummary:
    r"""DetectorModelSummary
    Information about the detector model.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detector_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDescription') }})
    detector_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    
