from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ResourceQuotas:
    r"""ResourceQuotas
    A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
    """
    
    application_quota: Optional[ResourceQuota] = field(default=None)
    application_version_quota: Optional[ResourceQuota] = field(default=None)
    configuration_template_quota: Optional[ResourceQuota] = field(default=None)
    custom_platform_quota: Optional[ResourceQuota] = field(default=None)
    environment_quota: Optional[ResourceQuota] = field(default=None)
    
