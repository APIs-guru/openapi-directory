from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayResponse:
    r"""GatewayResponse
    <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p> <div class=\"remarks\"> For more information about valid gateway response types, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html\">Gateway Response Types Supported by API Gateway</a> <div class=\"example\"> <h4>Example: Get a Gateway Response of a given response type</h4> <h5>Request</h5> <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T202516Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a Cache-Control: no-cache Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45 </code></pre> <p>The response type is specified as a URL path.</p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ \"_links\": { \"curies\": { \"href\": \"http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html\", \"name\": \"gatewayresponse\", \"templated\": true }, \"self\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, \"gatewayresponse:delete\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" }, \"gatewayresponse:put\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/{response_type}\", \"templated\": true }, \"gatewayresponse:update\": { \"href\": \"/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN\" } }, \"defaultResponse\": false, \"responseParameters\": { \"gatewayresponse.header.x-request-path\": \"method.request.path.petId\", \"gatewayresponse.header.Access-Control-Allow-Origin\": \"&apos;a.b.c&apos;\", \"gatewayresponse.header.x-request-query\": \"method.request.querystring.q\", \"gatewayresponse.header.x-request-header\": \"method.request.header.Accept\" }, \"responseTemplates\": { \"application/json\": \"{\n \\"message\\": $context.error.messageString,\n \\"type\\": \\"$context.error.responseType\\",\n \\"stage\\": \\"$context.stage\\",\n \\"resourcePath\\": \\"$context.resourcePath\\",\n \\"stageVariables.a\\": \\"$stageVariables.a\\",\n \\"statusCode\\": \\"&apos;404&apos;\\"\n}\" }, \"responseType\": \"MISSING_AUTHENTICATION_TOKEN\", \"statusCode\": \"404\" }</code></pre> <p/> </div> </div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html\">Customize Gateway Responses</a> </div>
    """
    
    default_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultResponse') }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTemplates') }})
    response_type: Optional[GatewayResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
