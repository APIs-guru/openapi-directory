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
class Build:
    r"""Build
    <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets\">All APIs by task</a> </p>
    """
    
    build_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildArn') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildId') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operating_system: Optional[OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    size_on_disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeOnDisk') }})
    status: Optional[BuildStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
