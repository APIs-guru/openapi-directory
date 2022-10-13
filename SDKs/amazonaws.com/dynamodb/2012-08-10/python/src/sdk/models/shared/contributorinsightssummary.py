from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contributorinsightsstatus_enum


@dataclass_json
@dataclass
class ContributorInsightsSummary:
    contributor_insights_status: Optional[contributorinsightsstatus_enum.ContributorInsightsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributorInsightsStatus' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
