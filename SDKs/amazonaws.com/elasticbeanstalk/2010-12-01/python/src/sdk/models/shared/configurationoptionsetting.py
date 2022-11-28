from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConfigurationOptionSetting:
    r"""ConfigurationOptionSetting
    A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html\">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. 
    """
    
    namespace: Optional[str] = field(default=None)
    option_name: Optional[str] = field(default=None)
    resource_name: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
