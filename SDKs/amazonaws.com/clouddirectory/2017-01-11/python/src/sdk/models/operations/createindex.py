from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateIndexRequestBodyParentReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class CreateIndexRequestBody:
    is_unique: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsUnique' }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    ordered_indexed_attribute_list: List[shared.AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderedIndexedAttributeList' }})
    parent_reference: Optional[CreateIndexRequestBodyParentReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    

@dataclass
class CreateIndexRequest:
    headers: CreateIndexHeaders = field(default=None)
    request: CreateIndexRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateIndexResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_index_response: Optional[shared.CreateIndexResponse] = field(default=None)
    directory_not_enabled_exception: Optional[Any] = field(default=None)
    facet_validation_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    link_name_already_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_index_type_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
