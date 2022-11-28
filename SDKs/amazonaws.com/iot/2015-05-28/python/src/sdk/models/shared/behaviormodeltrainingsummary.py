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
class BehaviorModelTrainingSummary:
    r"""BehaviorModelTrainingSummary
     The summary of an ML Detect behavior model. 
    """
    
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviorName') }})
    datapoints_collection_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointsCollectionPercentage') }})
    last_model_refresh_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModelRefreshDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_status: Optional[ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelStatus') }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    training_data_collection_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingDataCollectionStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
