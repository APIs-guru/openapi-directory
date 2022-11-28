from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SsoIdentity:
    r"""SsoIdentity
    Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html\">AWS Single Sign-On User Guide</a>.
    """
    
    identity_store_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityStoreId') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
