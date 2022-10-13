from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisioningTemplateVersionSummary:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefaultVersion' }})
    version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionId' }})
    
