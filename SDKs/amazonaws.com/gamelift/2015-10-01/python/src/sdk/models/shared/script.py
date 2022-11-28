from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Script:
    r"""Script
    <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets\">All APIs by task</a> </p>
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    script_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptArn') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptId') }})
    size_on_disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeOnDisk') }})
    storage_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageLocation') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
