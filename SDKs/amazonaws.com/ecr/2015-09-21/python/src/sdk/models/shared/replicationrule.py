from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationRule:
    r"""ReplicationRule
    An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
    """
    
    destinations: List[ReplicationDestination] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    
