from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mitigationactionparams
from . import mitigationactiontype_enum


@dataclass_json
@dataclass
class DescribeMitigationActionResponse:
    action_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionArn' }})
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionId' }})
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    action_params: Optional[mitigationactionparams.MitigationActionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionParams' }})
    action_type: Optional[mitigationactiontype_enum.MitigationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
