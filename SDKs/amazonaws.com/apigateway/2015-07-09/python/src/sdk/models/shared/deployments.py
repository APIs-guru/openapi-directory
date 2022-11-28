from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Deployments:
    r"""Deployments
    <p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p> <div class=\"remarks\">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html\">Deploying an API</a>, <a href=\"https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html\">AWS CLI</a>, <a href=\"https://aws.amazon.com/tools/\">AWS SDKs</a> </div>
    """
    
    items: Optional[List[Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
