from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPEndpointCommonAttribute:
    r"""HTTPEndpointCommonAttribute
    Describes the metadata that's delivered to the specified HTTP endpoint destination.
    """
    
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValue') }})
    
