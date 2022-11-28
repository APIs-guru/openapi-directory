from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Model:
    r"""Model
    <p>Represents the data structure of a method's request or response payload.</p> <div class=\"remarks\"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class=\"seeAlso\"> <a>Method</a>, <a>MethodResponse</a>, <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html\">Models and Mappings</a> </div>
    """
    
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
