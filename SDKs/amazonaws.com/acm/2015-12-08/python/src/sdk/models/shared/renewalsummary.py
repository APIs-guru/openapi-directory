from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainvalidation
from . import renewalstatus_enum
from . import failurereason_enum


@dataclass_json
@dataclass
class RenewalSummary:
    domain_validation_options: List[domainvalidation.DomainValidation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainValidationOptions' }})
    renewal_status: renewalstatus_enum.RenewalStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalStatus' }})
    renewal_status_reason: Optional[failurereason_enum.FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalStatusReason' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
