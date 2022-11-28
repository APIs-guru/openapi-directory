from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationResourceLifecycleConfig:
    r"""ApplicationResourceLifecycleConfig
    The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
    """
    
    service_role: Optional[str] = field(default=None)
    version_lifecycle_config: Optional[ApplicationVersionLifecycleConfig] = field(default=None)
    
