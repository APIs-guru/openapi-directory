from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRouteOutput:
    r"""UpdateRouteOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    route: RouteData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    
