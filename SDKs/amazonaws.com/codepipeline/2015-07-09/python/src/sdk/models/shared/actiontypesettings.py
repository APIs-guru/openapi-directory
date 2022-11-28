from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionTypeSettings:
    r"""ActionTypeSettings
    Returns information about the settings for an action type.
    """
    
    entity_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUrlTemplate') }})
    execution_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionUrlTemplate') }})
    revision_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrlTemplate') }})
    third_party_configuration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyConfigurationUrl') }})
    
