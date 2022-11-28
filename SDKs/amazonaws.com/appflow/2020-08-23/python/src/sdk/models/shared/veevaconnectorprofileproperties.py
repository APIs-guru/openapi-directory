from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VeevaConnectorProfileProperties:
    r"""VeevaConnectorProfileProperties
     The connector-specific profile properties required when using Veeva. 
    """
    
    instance_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceUrl') }})
    
