from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteLaunchTemplateVersionsResponseErrorItem:
    r"""DeleteLaunchTemplateVersionsResponseErrorItem
    Describes a launch template version that could not be deleted.
    """
    
    launch_template_id: Optional[str] = field(default=None)
    launch_template_name: Optional[str] = field(default=None)
    response_error: Optional[ResponseError] = field(default=None)
    version_number: Optional[int] = field(default=None)
    
