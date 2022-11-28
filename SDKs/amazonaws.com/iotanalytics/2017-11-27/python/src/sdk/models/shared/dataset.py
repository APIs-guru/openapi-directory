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
class Dataset:
    r"""Dataset
    Information about a dataset.
    """
    
    actions: Optional[List[DatasetAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    content_delivery_rules: Optional[List[DatasetContentDeliveryRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDeliveryRules') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    late_data_rules: Optional[List[LateDataRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lateDataRules') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    retention_period: Optional[RetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    status: Optional[DatasetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    triggers: Optional[List[DatasetTrigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    versioning_configuration: Optional[VersioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioningConfiguration') }})
    
