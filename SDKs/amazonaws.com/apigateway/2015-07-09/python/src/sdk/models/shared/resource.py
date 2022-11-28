from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    <p>Represents an API resource.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    path_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathPart') }})
    resource_methods: Optional[dict[str, Method]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceMethods') }})
    
