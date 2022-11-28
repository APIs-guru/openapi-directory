from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VolumeSpecification:
    r"""VolumeSpecification
    EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
    """
    
    size_in_gb: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInGB') }})
    volume_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    
