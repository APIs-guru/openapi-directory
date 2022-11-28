from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationSummary:
    r"""RecommendationSummary
     Information about recommendations. 
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndLine') }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilePath') }})
    recommendation_category: Optional[RecommendationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationCategory') }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationId') }})
    rule_metadata: Optional[RuleMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleMetadata') }})
    severity: Optional[SeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartLine') }})
    
