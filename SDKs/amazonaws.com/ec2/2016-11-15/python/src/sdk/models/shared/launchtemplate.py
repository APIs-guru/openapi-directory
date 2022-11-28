from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class LaunchTemplate:
    r"""LaunchTemplate
    Describes a launch template.
    """
    
    create_time: Optional[datetime] = field(default=None)
    created_by: Optional[str] = field(default=None)
    default_version_number: Optional[int] = field(default=None)
    latest_version_number: Optional[int] = field(default=None)
    launch_template_id: Optional[str] = field(default=None)
    launch_template_name: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
