from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThirdPartySourceRepository:
    r"""ThirdPartySourceRepository
     Information about a third-party source repository connected to CodeGuru Reviewer. 
    """
    
    connection_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    
