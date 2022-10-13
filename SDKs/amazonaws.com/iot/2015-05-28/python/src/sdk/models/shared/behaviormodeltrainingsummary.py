from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modelstatus_enum


@dataclass_json
@dataclass
class BehaviorModelTrainingSummary:
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behaviorName' }})
    datapoints_collection_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointsCollectionPercentage' }})
    last_model_refresh_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModelRefreshDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelStatus' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    training_data_collection_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingDataCollectionStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
