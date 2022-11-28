from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Finding:
    r"""Finding
    Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    attributes: List[Attribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_attributes: List[Attribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    asset_attributes: Optional[AssetAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetAttributes') }})
    asset_type: Optional[AssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    indicator_of_compromise: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicatorOfCompromise') }})
    numeric_severity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericSeverity') }})
    recommendation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    service_attributes: Optional[InspectorServiceAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAttributes') }})
    severity: Optional[SeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
