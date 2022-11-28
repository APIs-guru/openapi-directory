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
class Webhook:
    r"""Webhook
    Information about a webhook that connects repository events to a build project in CodeBuild.
    """
    
    branch_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchFilter') }})
    build_type: Optional[WebhookBuildTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    filter_groups: Optional[List[List[WebhookFilter]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterGroups') }})
    last_modified_secret: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedSecret'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadUrl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
