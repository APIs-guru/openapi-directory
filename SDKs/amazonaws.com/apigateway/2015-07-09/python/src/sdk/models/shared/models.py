from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Models:
    r"""Models
    <p>Represents a collection of <a>Model</a> resources.</p> <div class=\"seeAlso\"> <a>Method</a>, <a>MethodResponse</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html\">Models and Mappings</a> </div>
    """
    
    items: Optional[List[Model]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
