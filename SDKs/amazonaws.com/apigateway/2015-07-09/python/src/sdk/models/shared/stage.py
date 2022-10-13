from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesslogsettings
from . import cacheclustersize_enum
from . import cacheclusterstatus_enum
from . import canarysettings
from . import methodsetting


@dataclass_json
@dataclass
class Stage:
    access_log_settings: Optional[accesslogsettings.AccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLogSettings' }})
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheClusterEnabled' }})
    cache_cluster_size: Optional[cacheclustersize_enum.CacheClusterSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheClusterSize' }})
    cache_cluster_status: Optional[cacheclusterstatus_enum.CacheClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheClusterStatus' }})
    canary_settings: Optional[canarysettings.CanarySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canarySettings' }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificateId' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    documentation_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationVersion' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    method_settings: Optional[dict[str, methodsetting.MethodSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodSettings' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingEnabled' }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webAclArn' }})
    
