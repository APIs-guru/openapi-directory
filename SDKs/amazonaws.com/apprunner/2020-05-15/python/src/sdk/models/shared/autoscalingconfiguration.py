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
class AutoScalingConfiguration:
    r"""AutoScalingConfiguration
    <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
    """
    
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    auto_scaling_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationName') }})
    auto_scaling_configuration_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationRevision') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latest') }})
    max_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSize') }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSize') }})
    status: Optional[AutoScalingConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
