from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contributorinsightssummary


@dataclass_json
@dataclass
class ListContributorInsightsOutput:
    contributor_insights_summaries: Optional[List[contributorinsightssummary.ContributorInsightsSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributorInsightsSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
