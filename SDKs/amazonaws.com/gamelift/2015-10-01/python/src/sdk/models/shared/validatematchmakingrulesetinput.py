from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidateMatchmakingRuleSetInput:
    r"""ValidateMatchmakingRuleSetInput
    Represents the input for a request operation.
    """
    
    rule_set_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSetBody') }})
    
