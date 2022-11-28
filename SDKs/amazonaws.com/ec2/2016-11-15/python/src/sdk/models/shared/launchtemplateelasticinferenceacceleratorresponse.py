from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplateElasticInferenceAcceleratorResponse:
    r"""LaunchTemplateElasticInferenceAcceleratorResponse
     Describes an elastic inference accelerator. 
    """
    
    count: Optional[int] = field(default=None)
    type: Optional[str] = field(default=None)
    
