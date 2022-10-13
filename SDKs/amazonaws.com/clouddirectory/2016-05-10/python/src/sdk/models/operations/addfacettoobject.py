from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddFacetToObjectHeaders:
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
class AddFacetToObjectRequestBodyObjectReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class AddFacetToObjectRequestBodySchemaFacet:
    facet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FacetName' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    

@dataclass_json
@dataclass
class AddFacetToObjectRequestBody:
    object_attribute_list: Optional[List[shared.AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeList' }})
    object_reference: AddFacetToObjectRequestBodyObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    schema_facet: AddFacetToObjectRequestBodySchemaFacet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacet' }})
    

@dataclass
class AddFacetToObjectRequest:
    headers: AddFacetToObjectHeaders = field(default=None)
    request: AddFacetToObjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddFacetToObjectResponse:
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    add_facet_to_object_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    directory_not_enabled_exception: Optional[shared.DirectoryNotEnabledException] = field(default=None)
    facet_validation_exception: Optional[shared.FacetValidationException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
