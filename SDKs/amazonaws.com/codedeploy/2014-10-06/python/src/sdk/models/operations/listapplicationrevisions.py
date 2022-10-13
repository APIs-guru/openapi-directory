from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListApplicationRevisionsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListApplicationRevisionsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_APPLICATION_REVISIONS = "CodeDeploy_20141006.ListApplicationRevisions"


@dataclass
class ListApplicationRevisionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListApplicationRevisionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListApplicationRevisionsRequest:
    query_params: ListApplicationRevisionsQueryParams = field(default=None)
    headers: ListApplicationRevisionsHeaders = field(default=None)
    request: shared.ListApplicationRevisionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListApplicationRevisionsResponse:
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    bucket_name_filter_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_bucket_name_filter_exception: Optional[Any] = field(default=None)
    invalid_deployed_state_filter_exception: Optional[Any] = field(default=None)
    invalid_key_prefix_filter_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_sort_by_exception: Optional[Any] = field(default=None)
    invalid_sort_order_exception: Optional[Any] = field(default=None)
    list_application_revisions_output: Optional[shared.ListApplicationRevisionsOutput] = field(default=None)
    status_code: int = field(default=None)
    
