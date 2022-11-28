from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateGroupSubscription:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }, 'form': { 'field_name': 'ClientID' }})
    include: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Include') }, 'form': { 'field_name': 'Include' }})
    package_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageTypeID') }, 'form': { 'field_name': 'PackageTypeID' }})
    update_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateGroupID') }, 'form': { 'field_name': 'UpdateGroupID' }})
    update_group_subscription_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateGroupSubscriptionID') }, 'form': { 'field_name': 'UpdateGroupSubscriptionID' }})
    
