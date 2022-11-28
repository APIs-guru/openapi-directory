from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetLifecyclePolicyResponse:
    last_evaluated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEvaluatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecyclePolicyText') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
