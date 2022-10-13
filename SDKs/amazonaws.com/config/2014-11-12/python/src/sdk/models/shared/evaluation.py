from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum


@dataclass_json
@dataclass
class Evaluation:
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Annotation' }})
    compliance_resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceResourceId' }})
    compliance_resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceResourceType' }})
    compliance_type: compliancetype_enum.ComplianceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    ordering_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderingTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
