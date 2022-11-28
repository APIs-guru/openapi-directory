from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ImportImageLicenseConfigurationResponse:
    r"""ImportImageLicenseConfigurationResponse
     The response information for license configurations.
    """
    
    license_configuration_arn: Optional[str] = field(default=None)
    
