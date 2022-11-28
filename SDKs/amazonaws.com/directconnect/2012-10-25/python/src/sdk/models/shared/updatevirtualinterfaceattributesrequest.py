from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateVirtualInterfaceAttributesRequest:
    virtual_interface_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    
