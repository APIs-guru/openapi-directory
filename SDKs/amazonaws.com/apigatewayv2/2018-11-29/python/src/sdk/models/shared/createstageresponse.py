from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import accesslogsettings
from . import routesettings
from . import routesettings


@dataclass_json
@dataclass
class CreateStageResponse:
    access_log_settings: Optional[accesslogsettings.AccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLogSettings' }})
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayManaged' }})
    auto_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeploy' }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCertificateId' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_route_settings: Optional[routesettings.RouteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRouteSettings' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDeploymentStatusMessage' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    route_settings: Optional[dict[str, routesettings.RouteSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteSettings' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageName' }})
    stage_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageVariables' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
