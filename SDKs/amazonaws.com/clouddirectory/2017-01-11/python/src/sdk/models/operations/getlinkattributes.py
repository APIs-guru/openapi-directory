from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinkAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition' }})
    
class GetLinkAttributesRequestBodyConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class GetLinkAttributesRequestBodyTypedLinkSpecifier:
    identity_attribute_values: Optional[List[shared.AttributeNameAndValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityAttributeValues' }})
    source_object_reference: Optional[shared.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceObjectReference' }})
    target_object_reference: Optional[shared.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetObjectReference' }})
    typed_link_facet: Optional[shared.TypedLinkSchemaAndFacetName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkFacet' }})
    

@dataclass_json
@dataclass
class GetLinkAttributesRequestBody:
    attribute_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    consistency_level: Optional[GetLinkAttributesRequestBodyConsistencyLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistencyLevel' }})
    typed_link_specifier: GetLinkAttributesRequestBodyTypedLinkSpecifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkSpecifier' }})
    

@dataclass
class GetLinkAttributesRequest:
    headers: GetLinkAttributesHeaders = field(default=None)
    request: GetLinkAttributesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLinkAttributesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_not_enabled_exception: Optional[Any] = field(default=None)
    facet_validation_exception: Optional[Any] = field(default=None)
    get_link_attributes_response: Optional[shared.GetLinkAttributesResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
