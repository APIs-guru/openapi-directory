from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCodeReviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateCodeReviewRequestBodyType:
    analysis_types: Optional[List[shared.AnalysisTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalysisTypes' }})
    repository_analysis: Optional[shared.RepositoryAnalysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAnalysis' }})
    

@dataclass_json
@dataclass
class CreateCodeReviewRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    repository_association_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAssociationArn' }})
    type: CreateCodeReviewRequestBodyType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass
class CreateCodeReviewRequest:
    headers: CreateCodeReviewHeaders = field(default=None)
    request: CreateCodeReviewRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCodeReviewResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_code_review_response: Optional[shared.CreateCodeReviewResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
