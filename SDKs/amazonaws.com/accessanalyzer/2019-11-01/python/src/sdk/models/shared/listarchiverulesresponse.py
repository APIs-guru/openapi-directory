from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import archiverulesummary


@dataclass_json
@dataclass
class ListArchiveRulesResponse:
    archive_rules: List[archiverulesummary.ArchiveRuleSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveRules' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
