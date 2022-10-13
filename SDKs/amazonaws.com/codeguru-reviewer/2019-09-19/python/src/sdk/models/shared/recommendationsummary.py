from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recommendationcategory_enum
from . import rulemetadata
from . import severity_enum


@dataclass_json
@dataclass
class RecommendationSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndLine' }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilePath' }})
    recommendation_category: Optional[recommendationcategory_enum.RecommendationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationCategory' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationId' }})
    rule_metadata: Optional[rulemetadata.RuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleMetadata' }})
    severity: Optional[severity_enum.SeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartLine' }})
    
