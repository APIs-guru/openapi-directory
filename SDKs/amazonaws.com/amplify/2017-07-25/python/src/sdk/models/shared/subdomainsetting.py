from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubDomainSetting:
    r"""SubDomainSetting
     Describes the settings for the subdomain. 
    """
    
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
