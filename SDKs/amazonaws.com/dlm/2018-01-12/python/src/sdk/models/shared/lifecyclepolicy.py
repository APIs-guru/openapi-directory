from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policydetails
from . import gettablepolicystatevalues_enum


@dataclass_json
@dataclass
class LifecyclePolicy:
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyArn' }})
    policy_details: Optional[policydetails.PolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyDetails' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    state: Optional[gettablepolicystatevalues_enum.GettablePolicyStateValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
