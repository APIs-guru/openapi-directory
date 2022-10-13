from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cors
from . import protocoltype_enum


@dataclass_json
@dataclass
class API:
    api_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiEndpoint' }})
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayManaged' }})
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiId' }})
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeySelectionExpression' }})
    cors_configuration: Optional[cors.Cors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorsConfiguration' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableExecuteApiEndpoint' }})
    disable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableSchemaValidation' }})
    import_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportInfo' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    protocol_type: protocoltype_enum.ProtocolTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolType' }})
    route_selection_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteSelectionExpression' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warnings' }})
    
