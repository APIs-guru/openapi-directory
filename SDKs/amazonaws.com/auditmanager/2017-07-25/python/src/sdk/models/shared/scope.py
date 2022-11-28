from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Scope:
    r"""Scope
     The wrapper that contains the accounts and services in scope for the assessment. 
    """
    
    aws_accounts: Optional[List[AwsAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccounts') }})
    aws_services: Optional[List[AwsService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsServices') }})
    
