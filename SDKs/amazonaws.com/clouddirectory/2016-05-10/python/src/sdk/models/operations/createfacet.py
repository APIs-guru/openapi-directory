from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateFacetHeaders:
    x_amz_data_partition: str = field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateFacetRequestBodyObjectTypeEnum(str, Enum):
    NODE = "NODE"
    LEAF_NODE = "LEAF_NODE"
    POLICY = "POLICY"
    INDEX = "INDEX"


@dataclass_json
@dataclass
class CreateFacetRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    object_type: CreateFacetRequestBodyObjectTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectType') }})
    attributes: Optional[List[shared.FacetAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    

@dataclass
class CreateFacetRequest:
    headers: CreateFacetHeaders = field()
    request: CreateFacetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFacetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    create_facet_response: Optional[dict[str, Any]] = field(default=None)
    facet_already_exists_exception: Optional[shared.FacetAlreadyExistsException] = field(default=None)
    facet_validation_exception: Optional[shared.FacetValidationException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    invalid_rule_exception: Optional[shared.InvalidRuleException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
