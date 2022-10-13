from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPolicyResponse:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersionId' }})
    generation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generationId' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyArn' }})
    policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocument' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyName' }})
    
