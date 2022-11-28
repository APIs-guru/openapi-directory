from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PartnerEventSource:
    r"""PartnerEventSource
    A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
