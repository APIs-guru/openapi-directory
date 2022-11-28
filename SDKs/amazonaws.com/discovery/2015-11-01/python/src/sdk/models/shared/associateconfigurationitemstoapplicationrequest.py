from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateConfigurationItemsToApplicationRequest:
    application_configuration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationConfigurationId') }})
    configuration_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationIds') }})
    
