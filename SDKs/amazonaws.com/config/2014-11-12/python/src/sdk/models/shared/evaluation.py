from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Evaluation:
    r"""Evaluation
    Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
    """
    
    compliance_resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceResourceId') }})
    compliance_resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceResourceType') }})
    compliance_type: ComplianceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    ordering_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderingTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotation') }})
    
