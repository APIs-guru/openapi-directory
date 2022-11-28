from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetArchiveRuleResponse:
    r"""GetArchiveRuleResponse
    The response to the request.
    """
    
    archive_rule: ArchiveRuleSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveRule') }})
    
