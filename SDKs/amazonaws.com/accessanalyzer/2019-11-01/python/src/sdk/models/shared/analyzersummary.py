from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analyzerstatus_enum
from . import statusreason
from . import type_enum


@dataclass_json
@dataclass
class AnalyzerSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_resource_analyzed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastResourceAnalyzed' }})
    last_resource_analyzed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastResourceAnalyzedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: analyzerstatus_enum.AnalyzerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[statusreason.StatusReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: type_enum.TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
