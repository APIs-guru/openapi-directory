from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodegroupUpdateConfig:
    r"""NodegroupUpdateConfig
    The node group update configuration.
    """
    
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailable') }})
    max_unavailable_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailablePercentage') }})
    
