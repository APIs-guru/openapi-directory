from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LicenseConfiguration:
    r"""LicenseConfiguration
    Describes a license configuration.
    """
    
    license_configuration_arn: Optional[str] = field(default=None)
    
