from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class LaunchTemplateVersion:
    r"""LaunchTemplateVersion
    Describes a launch template version.
    """
    
    create_time: Optional[datetime] = field(default=None)
    created_by: Optional[str] = field(default=None)
    default_version: Optional[bool] = field(default=None)
    launch_template_data: Optional[ResponseLaunchTemplateData] = field(default=None)
    launch_template_id: Optional[str] = field(default=None)
    launch_template_name: Optional[str] = field(default=None)
    version_description: Optional[str] = field(default=None)
    version_number: Optional[int] = field(default=None)
    
