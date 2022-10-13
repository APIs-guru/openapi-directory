from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListIncomingTypedLinksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition' }})
    
class ListIncomingTypedLinksRequestBodyConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class ListIncomingTypedLinksRequestBodyFilterTypedLink:
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    typed_link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkName' }})
    

@dataclass_json
@dataclass
class ListIncomingTypedLinksRequestBodyObjectReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class ListIncomingTypedLinksRequestBody:
    consistency_level: Optional[ListIncomingTypedLinksRequestBodyConsistencyLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistencyLevel' }})
    filter_attribute_ranges: Optional[List[shared.TypedLinkAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterAttributeRanges' }})
    filter_typed_link: Optional[ListIncomingTypedLinksRequestBodyFilterTypedLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterTypedLink' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    object_reference: ListIncomingTypedLinksRequestBodyObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    

@dataclass
class ListIncomingTypedLinksRequest:
    headers: ListIncomingTypedLinksHeaders = field(default=None)
    request: ListIncomingTypedLinksRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListIncomingTypedLinksResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_not_enabled_exception: Optional[Any] = field(default=None)
    facet_validation_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    list_incoming_typed_links_response: Optional[shared.ListIncomingTypedLinksResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
