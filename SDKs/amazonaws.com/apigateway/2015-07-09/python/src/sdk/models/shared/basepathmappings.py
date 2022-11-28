from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasePathMappings:
    r"""BasePathMappings
    <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Use Custom Domain Names</a> </div>
    """
    
    items: Optional[List[BasePathMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
