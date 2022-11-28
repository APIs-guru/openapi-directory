from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatadogSourceProperties:
    r"""DatadogSourceProperties
     The properties that are applied when Datadog is being used as a source. 
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
