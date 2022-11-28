from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateGrokClassifierRequest:
    r"""UpdateGrokClassifierRequest
    Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    custom_patterns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomPatterns') }})
    grok_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokPattern') }})
    
