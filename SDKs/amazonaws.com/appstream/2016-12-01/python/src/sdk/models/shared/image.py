from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import application
from . import resourceerror
from . import imagepermissions
from . import platformtype_enum
from . import imagestate_enum
from . import imagestatechangereason
from . import visibilitytype_enum


@dataclass_json
@dataclass
class Image:
    applications: Optional[List[application.Application]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applications' }})
    appstream_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppstreamAgentVersion' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    base_image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseImageArn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    image_builder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBuilderName' }})
    image_builder_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBuilderSupported' }})
    image_errors: Optional[List[resourceerror.ResourceError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageErrors' }})
    image_permissions: Optional[imagepermissions.ImagePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePermissions' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    platform: Optional[platformtype_enum.PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    public_base_image_released_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicBaseImageReleasedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[imagestate_enum.ImageStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[imagestatechangereason.ImageStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    visibility: Optional[visibilitytype_enum.VisibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Visibility' }})
    
