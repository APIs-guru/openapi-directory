from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Edge:
    r"""Edge
    An edge represents a directed connection between two components on a workflow graph.
    """
    
    destination_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationId') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceId') }})
    
