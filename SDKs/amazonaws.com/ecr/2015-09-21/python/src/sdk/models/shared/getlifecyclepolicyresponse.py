from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLifecyclePolicyResponse:
    last_evaluated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEvaluatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecyclePolicyText' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
