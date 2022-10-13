from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateFacetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition' }})
    
class UpdateFacetRequestBodyObjectTypeEnum(str, Enum):
    NODE = "NODE"
    LEAF_NODE = "LEAF_NODE"
    POLICY = "POLICY"
    INDEX = "INDEX"


@dataclass_json
@dataclass
class UpdateFacetRequestBody:
    attribute_updates: Optional[List[shared.FacetAttributeUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeUpdates' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    object_type: Optional[UpdateFacetRequestBodyObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectType' }})
    

@dataclass
class UpdateFacetRequest:
    headers: UpdateFacetHeaders = field(default=None)
    request: UpdateFacetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFacetResponse:
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    content_type: str = field(default=None)
    facet_not_found_exception: Optional[shared.FacetNotFoundException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    invalid_facet_update_exception: Optional[shared.InvalidFacetUpdateException] = field(default=None)
    invalid_rule_exception: Optional[shared.InvalidRuleException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    status_code: int = field(default=None)
    update_facet_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
