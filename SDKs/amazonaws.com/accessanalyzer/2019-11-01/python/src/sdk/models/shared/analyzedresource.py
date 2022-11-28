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
class AnalyzedResource:
    r"""AnalyzedResource
    Contains details about the analyzed resource.
    """
    
    analyzed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_public: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublic') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    resource_owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwnerAccount') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    shared_via: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedVia') }})
    status: Optional[FindingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
