from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateCodeReviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCodeReviewRequestBodyType:
    r"""CreateCodeReviewRequestBodyType
    <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href=\"https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview\"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
    """
    
    analysis_types: Optional[List[shared.AnalysisTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalysisTypes') }})
    repository_analysis: Optional[shared.RepositoryAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAnalysis') }})
    

@dataclass_json
@dataclass
class CreateCodeReviewRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    repository_association_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAssociationArn') }})
    type: CreateCodeReviewRequestBodyType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    

@dataclass
class CreateCodeReviewRequest:
    headers: CreateCodeReviewHeaders = field()
    request: CreateCodeReviewRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCodeReviewResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_code_review_response: Optional[shared.CreateCodeReviewResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
