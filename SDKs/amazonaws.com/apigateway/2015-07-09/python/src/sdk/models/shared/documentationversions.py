from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentationVersions:
    r"""DocumentationVersions
    <p>The collection of documentation snapshots of an API. </p> <div class=\"remarks\"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div>
    """
    
    items: Optional[List[DocumentationVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
