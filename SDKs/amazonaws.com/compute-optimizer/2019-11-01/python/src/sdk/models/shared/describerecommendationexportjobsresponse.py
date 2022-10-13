from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationexportjob


@dataclass_json
@dataclass
class DescribeRecommendationExportJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recommendation_export_jobs: Optional[List[recommendationexportjob.RecommendationExportJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationExportJobs' }})
    
