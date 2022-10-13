from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTypedLinkFacetHeaders:
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
class CreateTypedLinkFacetRequestBodyFacet:
    attributes: Optional[List[shared.TypedLinkAttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    identity_attribute_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityAttributeOrder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class CreateTypedLinkFacetRequestBody:
    facet: CreateTypedLinkFacetRequestBodyFacet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Facet' }})
    

@dataclass
class CreateTypedLinkFacetRequest:
    headers: CreateTypedLinkFacetHeaders = field(default=None)
    request: CreateTypedLinkFacetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTypedLinkFacetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_typed_link_facet_response: Optional[dict[str, Any]] = field(default=None)
    facet_already_exists_exception: Optional[Any] = field(default=None)
    facet_validation_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_rule_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
