from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BasePathMapping:
    r"""BasePathMapping
    <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class=\"remarks\">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Use Custom Domain Names</a> </div>
    """
    
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePath') }})
    rest_api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restApiId') }})
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    
