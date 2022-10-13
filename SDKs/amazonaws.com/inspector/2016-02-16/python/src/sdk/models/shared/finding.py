from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assetattributes
from . import assettype_enum
from . import attribute
from . import inspectorserviceattributes
from . import severity_enum
from . import attribute


@dataclass_json
@dataclass
class Finding:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    asset_attributes: Optional[assetattributes.AssetAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetAttributes' }})
    asset_type: Optional[assettype_enum.AssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    attributes: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    indicator_of_compromise: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indicatorOfCompromise' }})
    numeric_severity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericSeverity' }})
    recommendation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendation' }})
    schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_attributes: Optional[inspectorserviceattributes.InspectorServiceAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAttributes' }})
    severity: Optional[severity_enum.SeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_attributes: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributes' }})
    
