from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsBundle:
    bundle_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleNumber') }, 'form': { 'field_name': 'BundleNumber' }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    update_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateGroupID') }, 'form': { 'field_name': 'UpdateGroupID' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }, 'form': { 'field_name': 'Active' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleID') }, 'form': { 'field_name': 'BundleID' }})
    
