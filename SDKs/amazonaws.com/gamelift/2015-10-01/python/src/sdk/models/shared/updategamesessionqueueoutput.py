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
class UpdateGameSessionQueueOutput:
    r"""UpdateGameSessionQueueOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_queue: Optional[GameSessionQueue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueue') }})
    
