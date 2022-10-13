from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import archiverulesummary


@dataclass_json
@dataclass
class GetArchiveRuleResponse:
    archive_rule: archiverulesummary.ArchiveRuleSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveRule' }})
    
