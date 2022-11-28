from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IotEventsDestinationConfiguration:
    r"""IotEventsDestinationConfiguration
    Configuration information for delivery of dataset contents to IoT Events.
    """
    
    input_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
