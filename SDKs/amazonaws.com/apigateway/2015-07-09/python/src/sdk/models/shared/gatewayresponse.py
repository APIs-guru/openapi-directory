from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gatewayresponsetype_enum


@dataclass_json
@dataclass
class GatewayResponse:
    default_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultResponse' }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTemplates' }})
    response_type: Optional[gatewayresponsetype_enum.GatewayResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseType' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
