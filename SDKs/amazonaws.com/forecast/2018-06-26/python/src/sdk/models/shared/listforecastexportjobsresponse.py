from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forecastexportjobsummary


@dataclass_json
@dataclass
class ListForecastExportJobsResponse:
    forecast_export_jobs: Optional[List[forecastexportjobsummary.ForecastExportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastExportJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
