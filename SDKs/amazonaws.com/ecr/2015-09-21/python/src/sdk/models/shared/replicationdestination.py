from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationDestination:
    r"""ReplicationDestination
    An array of objects representing the details of a replication destination.
    """
    
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    registry_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
