from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListApplicationRevisionsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListApplicationRevisionsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_APPLICATION_REVISIONS = "CodeDeploy_20141006.ListApplicationRevisions"


@dataclass
class ListApplicationRevisionsHeaders:
    x_amz_target: ListApplicationRevisionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListApplicationRevisionsRequest:
    headers: ListApplicationRevisionsHeaders = field()
    query_params: ListApplicationRevisionsQueryParams = field()
    request: shared.ListApplicationRevisionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListApplicationRevisionsResponse:
    content_type: str = field()
    status_code: int = field()
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    bucket_name_filter_required_exception: Optional[Any] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_bucket_name_filter_exception: Optional[Any] = field(default=None)
    invalid_deployed_state_filter_exception: Optional[Any] = field(default=None)
    invalid_key_prefix_filter_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_sort_by_exception: Optional[Any] = field(default=None)
    invalid_sort_order_exception: Optional[Any] = field(default=None)
    list_application_revisions_output: Optional[shared.ListApplicationRevisionsOutput] = field(default=None)
    
