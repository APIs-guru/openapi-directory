from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceundertest


@dataclass_json
@dataclass
class SuiteDefinitionInformation:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_devices: Optional[List[deviceundertest.DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultDevices' }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedForQualification' }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionId' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    
