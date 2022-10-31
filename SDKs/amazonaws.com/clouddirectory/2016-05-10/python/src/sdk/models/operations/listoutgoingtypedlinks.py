from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListOutgoingTypedLinksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    
class ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class ListOutgoingTypedLinksRequestBodyFilterTypedLink:
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    typed_link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkName' }})
    

@dataclass_json
@dataclass
class ListOutgoingTypedLinksRequestBodyObjectReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class ListOutgoingTypedLinksRequestBody:
    consistency_level: Optional[ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistencyLevel' }})
    filter_attribute_ranges: Optional[List[shared.TypedLinkAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterAttributeRanges' }})
    filter_typed_link: Optional[ListOutgoingTypedLinksRequestBodyFilterTypedLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterTypedLink' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    object_reference: ListOutgoingTypedLinksRequestBodyObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    

@dataclass
class ListOutgoingTypedLinksRequest:
    headers: ListOutgoingTypedLinksHeaders = field(default=None)
    request: ListOutgoingTypedLinksRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOutgoingTypedLinksResponse:
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    content_type: str = field(default=None)
    directory_not_enabled_exception: Optional[shared.DirectoryNotEnabledException] = field(default=None)
    facet_validation_exception: Optional[shared.FacetValidationException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    invalid_next_token_exception: Optional[shared.InvalidNextTokenException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    list_outgoing_typed_links_response: Optional[shared.ListOutgoingTypedLinksResponse] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
