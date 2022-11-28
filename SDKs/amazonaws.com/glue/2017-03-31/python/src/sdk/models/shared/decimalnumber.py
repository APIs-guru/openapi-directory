from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DecimalNumber:
    r"""DecimalNumber
    Contains a numeric value in decimal format.
    """
    
    scale: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scale') }})
    unscaled_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnscaledValue') }})
    
