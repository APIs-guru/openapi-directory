from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fargateprofileselector
from . import fargateprofilestatus_enum


@dataclass_json
@dataclass
class FargateProfile:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fargate_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargateProfileArn' }})
    fargate_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargateProfileName' }})
    pod_execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podExecutionRoleArn' }})
    selectors: Optional[List[fargateprofileselector.FargateProfileSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectors' }})
    status: Optional[fargateprofilestatus_enum.FargateProfileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
