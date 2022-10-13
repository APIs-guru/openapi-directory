from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import durationrange


@dataclass_json
@dataclass
class AssessmentTemplateFilter:
    duration_range: Optional[durationrange.DurationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationRange' }})
    name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namePattern' }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    
