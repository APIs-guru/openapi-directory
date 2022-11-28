from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stage:
    r"""Stage
    <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html\">Deploy an API</a> </div>
    """
    
    access_log_settings: Optional[AccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLogSettings') }})
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheClusterEnabled') }})
    cache_cluster_size: Optional[CacheClusterSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheClusterSize') }})
    cache_cluster_status: Optional[CacheClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheClusterStatus') }})
    canary_settings: Optional[CanarySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canarySettings') }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificateId') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    documentation_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationVersion') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    method_settings: Optional[dict[str, MethodSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodSettings') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingEnabled') }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAclArn') }})
    
