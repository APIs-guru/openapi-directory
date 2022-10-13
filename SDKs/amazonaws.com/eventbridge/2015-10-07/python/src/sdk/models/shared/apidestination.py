from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apidestinationstate_enum
from . import apidestinationhttpmethod_enum


@dataclass_json
@dataclass
class APIDestination:
    api_destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiDestinationArn' }})
    api_destination_state: Optional[apidestinationstate_enum.APIDestinationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiDestinationState' }})
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    http_method: Optional[apidestinationhttpmethod_enum.APIDestinationHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpMethod' }})
    invocation_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationEndpoint' }})
    invocation_rate_limit_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationRateLimitPerSecond' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
