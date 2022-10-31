from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAnalyzedResourcesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAnalyzedResourcesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ListAnalyzedResourcesRequestBodyResourceTypeEnum(str, Enum):
    AWS_S3_BUCKET = "AWS::S3::Bucket"
    AWS_IAM_ROLE = "AWS::IAM::Role"
    AWS_SQS_QUEUE = "AWS::SQS::Queue"
    AWS_LAMBDA_FUNCTION = "AWS::Lambda::Function"
    AWS_LAMBDA_LAYER_VERSION = "AWS::Lambda::LayerVersion"
    AWS_KMS_KEY = "AWS::KMS::Key"
    AWS_SECRETS_MANAGER_SECRET = "AWS::SecretsManager::Secret"


@dataclass_json
@dataclass
class ListAnalyzedResourcesRequestBody:
    analyzer_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzerArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_type: Optional[ListAnalyzedResourcesRequestBodyResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass
class ListAnalyzedResourcesRequest:
    query_params: ListAnalyzedResourcesQueryParams = field(default=None)
    headers: ListAnalyzedResourcesHeaders = field(default=None)
    request: ListAnalyzedResourcesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAnalyzedResourcesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_analyzed_resources_response: Optional[shared.ListAnalyzedResourcesResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
