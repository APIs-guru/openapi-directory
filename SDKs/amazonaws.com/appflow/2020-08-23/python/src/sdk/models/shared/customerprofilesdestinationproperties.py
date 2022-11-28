from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerProfilesDestinationProperties:
    r"""CustomerProfilesDestinationProperties
     The properties that are applied when Amazon Connect Customer Profiles is used as a destination. 
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    object_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypeName') }})
    
