from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunJobFlowInput:
    r"""RunJobFlowInput
     Input to the <a>RunJobFlow</a> operation. 
    """
    
    instances: JobFlowInstancesConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalInfo') }})
    ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiVersion') }})
    applications: Optional[List[Application]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingRole') }})
    auto_termination_policy: Optional[AutoTerminationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoTerminationPolicy') }})
    bootstrap_actions: Optional[List[BootstrapActionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BootstrapActions') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_root_volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsRootVolumeSize') }})
    job_flow_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowRole') }})
    kerberos_attributes: Optional[KerberosAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KerberosAttributes') }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogEncryptionKmsKeyId') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogUri') }})
    managed_scaling_policy: Optional[ManagedScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedScalingPolicy') }})
    new_supported_products: Optional[List[SupportedProductConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewSupportedProducts') }})
    placement_group_configs: Optional[List[PlacementGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementGroupConfigs') }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseLabel') }})
    repo_upgrade_on_boot: Optional[RepoUpgradeOnBootEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepoUpgradeOnBoot') }})
    scale_down_behavior: Optional[ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleDownBehavior') }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepConcurrencyLevel') }})
    steps: Optional[List[StepConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    supported_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedProducts') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibleToAllUsers') }})
    
