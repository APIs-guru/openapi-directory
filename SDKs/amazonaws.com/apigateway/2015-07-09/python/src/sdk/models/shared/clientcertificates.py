from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientCertificates:
    r"""ClientCertificates
    <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html\">Use Client-Side Certificate</a> </div>
    """
    
    items: Optional[List[ClientCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
