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
class RoutingStrategy:
    r"""RoutingStrategy
    <p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets\">All APIs by task</a> </p>
    """
    
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    type: Optional[RoutingStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
