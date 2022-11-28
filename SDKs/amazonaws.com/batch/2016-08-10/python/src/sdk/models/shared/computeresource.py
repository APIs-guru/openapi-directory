from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeResource:
    r"""ComputeResource
    An object representing an Batch compute resource. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html\">Compute Environments</a> in the <i>Batch User Guide</i>.
    """
    
    maxv_cpus: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxvCpus') }})
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    type: CrTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allocation_strategy: Optional[CrAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationStrategy') }})
    bid_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredvCpus') }})
    ec2_configuration: Optional[List[Ec2Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2Configuration') }})
    ec2_key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2KeyPair') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    instance_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceRole') }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minvCpus') }})
    placement_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroup') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    spot_iam_fleet_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spotIamFleetRole') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
