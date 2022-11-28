from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookAuthConfiguration:
    r"""WebhookAuthConfiguration
    The authentication applied to incoming webhook trigger requests.
    """
    
    allowed_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedIPRange') }})
    secret_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretToken') }})
    
