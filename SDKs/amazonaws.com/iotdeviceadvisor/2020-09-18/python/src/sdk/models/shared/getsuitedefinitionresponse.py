from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSuiteDefinitionResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestVersion') }})
    suite_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionArn') }})
    suite_definition_configuration: Optional[SuiteDefinitionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionConfiguration') }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionId') }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionVersion') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
