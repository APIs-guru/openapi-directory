from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class API:
    r"""API
    Represents an API.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    protocol_type: ProtocolTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolType') }})
    route_selection_expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteSelectionExpression') }})
    api_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiEndpoint') }})
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiGatewayManaged') }})
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiId') }})
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeySelectionExpression') }})
    cors_configuration: Optional[Cors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CorsConfiguration') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableExecuteApiEndpoint') }})
    disable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableSchemaValidation') }})
    import_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportInfo') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    
