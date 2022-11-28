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
class Image:
    r"""Image
    Describes an image.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    applications: Optional[List[Application]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    appstream_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppstreamAgentVersion') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    base_image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseImageArn') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    image_builder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageBuilderName') }})
    image_builder_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageBuilderSupported') }})
    image_errors: Optional[List[ResourceError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageErrors') }})
    image_permissions: Optional[ImagePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImagePermissions') }})
    platform: Optional[PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    public_base_image_released_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicBaseImageReleasedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[ImageStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[ImageStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    visibility: Optional[VisibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Visibility') }})
    
