from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetObjectAttributesXAmzConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass
class GetObjectAttributesHeaders:
    x_amz_data_partition: str = field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_consistency_level: Optional[GetObjectAttributesXAmzConsistencyLevelEnum] = field(default=None, metadata={'header': { 'field_name': 'x-amz-consistency-level', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetObjectAttributesRequestBodyObjectReference:
    r"""GetObjectAttributesRequestBodyObjectReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclass
class GetObjectAttributesRequestBodySchemaFacet:
    r"""GetObjectAttributesRequestBodySchemaFacet
    A facet.
    """
    
    facet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FacetName') }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    

@dataclass_json
@dataclass
class GetObjectAttributesRequestBody:
    attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    object_reference: GetObjectAttributesRequestBodyObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: GetObjectAttributesRequestBodySchemaFacet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    

@dataclass
class GetObjectAttributesRequest:
    headers: GetObjectAttributesHeaders = field()
    request: GetObjectAttributesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetObjectAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    directory_not_enabled_exception: Optional[Any] = field(default=None)
    facet_validation_exception: Optional[Any] = field(default=None)
    get_object_attributes_response: Optional[shared.GetObjectAttributesResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
