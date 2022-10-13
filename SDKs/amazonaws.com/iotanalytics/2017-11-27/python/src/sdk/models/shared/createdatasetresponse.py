from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import retentionperiod


@dataclass_json
@dataclass
class CreateDatasetResponse:
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetName' }})
    retention_period: Optional[retentionperiod.RetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    
