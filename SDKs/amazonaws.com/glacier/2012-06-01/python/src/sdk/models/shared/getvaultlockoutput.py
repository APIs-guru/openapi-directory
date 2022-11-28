from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetVaultLockOutput:
    r"""GetVaultLockOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
