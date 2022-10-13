from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationsource


@dataclass_json
@dataclass
class DescribeScalingPlansRequest:
    application_sources: Optional[List[applicationsource.ApplicationSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSources' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_plan_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanNames' }})
    scaling_plan_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanVersion' }})
    
