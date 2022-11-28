from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListIndexQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListIndexXAmzConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass
class ListIndexHeaders:
    x_amz_data_partition: str = field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_consistency_level: Optional[ListIndexXAmzConsistencyLevelEnum] = field(default=None, metadata={'header': { 'field_name': 'x-amz-consistency-level', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListIndexRequestBodyIndexReference:
    r"""ListIndexRequestBodyIndexReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclass
class ListIndexRequestBody:
    index_reference: ListIndexRequestBodyIndexReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexReference') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    ranges_on_indexed_values: Optional[List[shared.ObjectAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangesOnIndexedValues') }})
    

@dataclass
class ListIndexRequest:
    headers: ListIndexHeaders = field()
    query_params: ListIndexQueryParams = field()
    request: ListIndexRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListIndexResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    directory_not_enabled_exception: Optional[shared.DirectoryNotEnabledException] = field(default=None)
    facet_validation_exception: Optional[shared.FacetValidationException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    invalid_next_token_exception: Optional[shared.InvalidNextTokenException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    list_index_response: Optional[shared.ListIndexResponse] = field(default=None)
    not_index_exception: Optional[shared.NotIndexException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
