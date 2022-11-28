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
class RenewalSummary:
    r"""RenewalSummary
    Contains information about the status of ACM's <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html\">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
    """
    
    domain_validation_options: List[DomainValidation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    renewal_status: RenewalStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatus') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    renewal_status_reason: Optional[FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatusReason') }})
    
