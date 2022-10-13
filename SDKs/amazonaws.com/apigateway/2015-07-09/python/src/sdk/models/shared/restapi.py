from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apikeysourcetype_enum
from . import endpointconfiguration


@dataclass_json
@dataclass
class RestAPI:
    api_key_source: Optional[apikeysourcetype_enum.APIKeySourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeySource' }})
    binary_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryMediaTypes' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableExecuteApiEndpoint' }})
    endpoint_configuration: Optional[endpointconfiguration.EndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointConfiguration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    minimum_compression_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumCompressionSize' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
