from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contributorinsightsaction_enum


@dataclass_json
@dataclass
class UpdateContributorInsightsInput:
    contributor_insights_action: contributorinsightsaction_enum.ContributorInsightsActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributorInsightsAction' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
