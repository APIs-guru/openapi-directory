from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GameSessionQueueDestination:
    r"""GameSessionQueueDestination
    <p>A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations. </p> <p>Destinations are part of a <a>GameSessionQueue</a>.</p>
    """
    
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationArn') }})
    
