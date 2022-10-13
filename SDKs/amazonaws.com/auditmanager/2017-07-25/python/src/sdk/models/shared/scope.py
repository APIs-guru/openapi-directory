from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsaccount
from . import awsservice


@dataclass_json
@dataclass
class Scope:
    aws_accounts: Optional[List[awsaccount.AwsAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccounts' }})
    aws_services: Optional[List[awsservice.AwsService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsServices' }})
    
