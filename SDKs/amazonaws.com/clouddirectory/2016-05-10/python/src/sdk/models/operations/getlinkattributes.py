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
class GetLinkAttributesHeaders:
    x_amz_data_partition: str = field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetLinkAttributesRequestBodyConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class GetLinkAttributesRequestBodyTypedLinkSpecifier:
    r"""GetLinkAttributesRequestBodyTypedLinkSpecifier
    Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    """
    
    identity_attribute_values: Optional[List[shared.AttributeNameAndValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityAttributeValues') }})
    source_object_reference: Optional[shared.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: Optional[shared.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: Optional[shared.TypedLinkSchemaAndFacetName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    

@dataclass_json
@dataclass
class GetLinkAttributesRequestBody:
    attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    typed_link_specifier: GetLinkAttributesRequestBodyTypedLinkSpecifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    consistency_level: Optional[GetLinkAttributesRequestBodyConsistencyLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistencyLevel') }})
    

@dataclass
class GetLinkAttributesRequest:
    headers: GetLinkAttributesHeaders = field()
    request: GetLinkAttributesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLinkAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    directory_not_enabled_exception: Optional[shared.DirectoryNotEnabledException] = field(default=None)
    facet_validation_exception: Optional[shared.FacetValidationException] = field(default=None)
    get_link_attributes_response: Optional[shared.GetLinkAttributesResponse] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    limit_exceeded_exception: Optional[shared.LimitExceededException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
