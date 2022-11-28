from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateThingTypeResponse:
    r"""CreateThingTypeResponse
    The output of the CreateThingType operation.
    """
    
    thing_type_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeArn') }})
    thing_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeId') }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeName') }})
    
