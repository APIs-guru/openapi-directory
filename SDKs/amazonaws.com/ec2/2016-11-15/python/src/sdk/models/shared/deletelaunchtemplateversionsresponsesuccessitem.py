from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteLaunchTemplateVersionsResponseSuccessItem:
    r"""DeleteLaunchTemplateVersionsResponseSuccessItem
    Describes a launch template version that was successfully deleted.
    """
    
    launch_template_id: Optional[str] = field(default=None)
    launch_template_name: Optional[str] = field(default=None)
    version_number: Optional[int] = field(default=None)
    
