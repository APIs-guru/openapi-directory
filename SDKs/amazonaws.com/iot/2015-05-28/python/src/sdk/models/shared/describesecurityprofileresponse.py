from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSecurityProfileResponse:
    additional_metrics_to_retain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetain') }})
    additional_metrics_to_retain_v2: Optional[List[MetricToRetain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetainV2') }})
    alert_targets: Optional[dict[str, AlertTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTargets') }})
    behaviors: Optional[List[Behavior]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviors') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    security_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileArn') }})
    security_profile_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileDescription') }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
