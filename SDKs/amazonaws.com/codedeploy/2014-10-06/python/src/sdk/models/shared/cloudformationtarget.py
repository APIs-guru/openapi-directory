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
class CloudFormationTarget:
    r"""CloudFormationTarget
     Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
    """
    
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_events: Optional[List[LifecycleEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleEvents') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    status: Optional[TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    target_version_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersionWeight') }})
    
