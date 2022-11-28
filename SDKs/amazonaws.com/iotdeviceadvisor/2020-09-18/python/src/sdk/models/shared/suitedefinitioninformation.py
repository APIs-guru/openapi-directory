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
class SuiteDefinitionInformation:
    r"""SuiteDefinitionInformation
    Information about the suite definition.
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_devices: Optional[List[DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDevices') }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedForQualification') }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionId') }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionName') }})
    
