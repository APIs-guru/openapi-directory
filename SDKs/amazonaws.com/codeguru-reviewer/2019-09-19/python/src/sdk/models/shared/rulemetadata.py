from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleMetadata:
    r"""RuleMetadata
    Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
    """
    
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongDescription') }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    rule_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleTags') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortDescription') }})
    
