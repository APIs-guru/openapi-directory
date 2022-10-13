from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datadestination
from . import tag


@dataclass_json
@dataclass
class CreateForecastExportJobRequest:
    destination: datadestination.DataDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    forecast_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastArn' }})
    forecast_export_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastExportJobName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
