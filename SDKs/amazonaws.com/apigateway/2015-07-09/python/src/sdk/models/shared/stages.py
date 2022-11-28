from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stages:
    r"""Stages
    <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class=\"seeAlso\"><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html\">Deploying API in Stages</a></div>
    """
    
    item: Optional[List[Stage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    
