from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestInvokeMethodResponse:
    r"""TestInvokeMethodResponse
    <p>Represents the response of the test invoke request in the HTTP method.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console\">Test API using the API Gateway console</a> </div>
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    log: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log') }})
    multi_value_headers: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiValueHeaders') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
