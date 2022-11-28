from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationVersionLifecycleConfig:
    r"""ApplicationVersionLifecycleConfig
    <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
    """
    
    max_age_rule: Optional[MaxAgeRule] = field(default=None)
    max_count_rule: Optional[MaxCountRule] = field(default=None)
    
