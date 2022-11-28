from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedThroughput:
    r"""ProvisionedThroughput
    Provisioned throughput reserves the required read and write resources for your table in terms of <code>ReadCapacityUnits</code> and <code>WriteCapacityUnits</code>. Values for provisioned throughput depend upon your expected read/write rates, item size, and consistency. Provide the expected number of read and write operations, assuming an item size of 1k and strictly consistent reads. For 2k item size, double the value. For 3k, triple the value, etc. Eventually-consistent reads consume half the resources of strictly consistent reads.
    """
    
    read_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    write_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCapacityUnits') }})
    
