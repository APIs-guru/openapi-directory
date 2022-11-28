from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartCostEstimationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartCostEstimationRequestBodyResourceCollection:
    r"""StartCostEstimationRequestBodyResourceCollection
    Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href=\"https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html\">Estimate your Amazon DevOps Guru costs</a> and <a href=\"http://aws.amazon.com/devops-guru/pricing/\">Amazon DevOps Guru pricing</a>. 
    """
    
    cloud_formation: Optional[shared.CloudFormationCostEstimationResourceCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    

@dataclass_json
@dataclass
class StartCostEstimationRequestBody:
    resource_collection: StartCostEstimationRequestBodyResourceCollection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    

@dataclass
class StartCostEstimationRequest:
    headers: StartCostEstimationHeaders = field()
    request: StartCostEstimationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartCostEstimationResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_cost_estimation_response: Optional[dict[str, Any]] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
