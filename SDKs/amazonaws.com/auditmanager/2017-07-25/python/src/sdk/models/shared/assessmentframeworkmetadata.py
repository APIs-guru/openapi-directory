from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import frameworktype_enum


@dataclass_json
@dataclass
class AssessmentFrameworkMetadata:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceType' }})
    control_sets_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetsCount' }})
    controls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlsCount' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[frameworktype_enum.FrameworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
