from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateObjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition' }})
    

@dataclass_json
@dataclass
class CreateObjectRequestBodyParentReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class CreateObjectRequestBody:
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    object_attribute_list: Optional[List[shared.AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeList' }})
    parent_reference: Optional[CreateObjectRequestBodyParentReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    schema_facets: List[shared.SchemaFacet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacets' }})
    

@dataclass
class CreateObjectRequest:
    headers: CreateObjectHeaders = field(default=None)
    request: CreateObjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateObjectResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_object_response: Optional[shared.CreateObjectResponse] = field(default=None)
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
    
