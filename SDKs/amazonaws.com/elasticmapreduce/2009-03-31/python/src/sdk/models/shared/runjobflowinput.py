from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import application
from . import autoterminationpolicy
from . import bootstrapactionconfig
from . import configuration
from . import jobflowinstancesconfig
from . import kerberosattributes
from . import managedscalingpolicy
from . import supportedproductconfig
from . import placementgroupconfig
from . import repoupgradeonboot_enum
from . import scaledownbehavior_enum
from . import stepconfig
from . import tag


@dataclass_json
@dataclass
class RunJobFlowInput:
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInfo' }})
    ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiVersion' }})
    applications: Optional[List[application.Application]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applications' }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingRole' }})
    auto_termination_policy: Optional[autoterminationpolicy.AutoTerminationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoTerminationPolicy' }})
    bootstrap_actions: Optional[List[bootstrapactionconfig.BootstrapActionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BootstrapActions' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_root_volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsRootVolumeSize' }})
    instances: jobflowinstancesconfig.JobFlowInstancesConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    job_flow_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowRole' }})
    kerberos_attributes: Optional[kerberosattributes.KerberosAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KerberosAttributes' }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogEncryptionKmsKeyId' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    managed_scaling_policy: Optional[managedscalingpolicy.ManagedScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedScalingPolicy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    new_supported_products: Optional[List[supportedproductconfig.SupportedProductConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewSupportedProducts' }})
    placement_group_configs: Optional[List[placementgroupconfig.PlacementGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementGroupConfigs' }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseLabel' }})
    repo_upgrade_on_boot: Optional[repoupgradeonboot_enum.RepoUpgradeOnBootEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepoUpgradeOnBoot' }})
    scale_down_behavior: Optional[scaledownbehavior_enum.ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleDownBehavior' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepConcurrencyLevel' }})
    steps: Optional[List[stepconfig.StepConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    supported_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedProducts' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisibleToAllUsers' }})
    
