from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateUserPoolDomainRequest:
    r"""UpdateUserPoolDomainRequest
    The UpdateUserPoolDomain request input.
    """
    
    custom_domain_config: CustomDomainConfigType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomainConfig') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
