from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authmode_enum
from . import tag


@dataclass_json
@dataclass
class Studio:
    auth_mode: Optional[authmode_enum.AuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthMode' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_s3_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultS3Location' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineSecurityGroupId' }})
    idp_auth_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpAuthUrl' }})
    idp_relay_state_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpRelayStateParameterName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    studio_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioArn' }})
    studio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    user_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserRole' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    workspace_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceSecurityGroupId' }})
    
