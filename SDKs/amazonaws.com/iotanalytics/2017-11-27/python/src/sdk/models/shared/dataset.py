from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasetaction
from . import datasetcontentdeliveryrule
from . import latedatarule
from . import retentionperiod
from . import datasetstatus_enum
from . import datasettrigger
from . import versioningconfiguration


@dataclass_json
@dataclass
class Dataset:
    actions: Optional[List[datasetaction.DatasetAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    content_delivery_rules: Optional[List[datasetcontentdeliveryrule.DatasetContentDeliveryRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDeliveryRules' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    late_data_rules: Optional[List[latedatarule.LateDataRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lateDataRules' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    retention_period: Optional[retentionperiod.RetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    status: Optional[datasetstatus_enum.DatasetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    triggers: Optional[List[datasettrigger.DatasetTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    versioning_configuration: Optional[versioningconfiguration.VersioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioningConfiguration' }})
    
