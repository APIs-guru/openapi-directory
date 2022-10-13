from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actiontype_enum


@dataclass_json
@dataclass
class Permission:
    actions: Optional[List[actiontype_enum.ActionTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccount' }})
    
