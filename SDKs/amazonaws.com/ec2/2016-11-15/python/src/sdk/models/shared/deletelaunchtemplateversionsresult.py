from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeleteLaunchTemplateVersionsResult:
    successfully_deleted_launch_template_versions: Optional[List[DeleteLaunchTemplateVersionsResponseSuccessItem]] = field(default=None)
    unsuccessfully_deleted_launch_template_versions: Optional[List[DeleteLaunchTemplateVersionsResponseErrorItem]] = field(default=None)
    
