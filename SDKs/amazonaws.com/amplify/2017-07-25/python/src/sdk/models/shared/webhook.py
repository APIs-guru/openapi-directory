from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Webhook:
    r"""Webhook
     Describes a webhook that connects repository events to an Amplify app. 
    """
    
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    webhook_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookArn') }})
    webhook_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookId') }})
    webhook_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    
