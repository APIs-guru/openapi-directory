from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateForecastExportJobResponse:
    forecast_export_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastExportJobArn' }})
    
