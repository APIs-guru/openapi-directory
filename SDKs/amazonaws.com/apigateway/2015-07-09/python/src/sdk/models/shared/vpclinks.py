from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VpcLinks:
    r"""VpcLinks
    <p>The collection of VPC links under the caller's account in a region.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html\">Getting Started with Private Integrations</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html\">Set up Private Integrations</a> </div>
    """
    
    items: Optional[List[VpcLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
