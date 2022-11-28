from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PlatformDescription:
    r"""PlatformDescription
    Detailed information about a platform version.
    """
    
    custom_ami_list: Optional[List[CustomAmi]] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_updated: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    frameworks: Optional[List[PlatformFramework]] = field(default=None)
    maintainer: Optional[str] = field(default=None)
    operating_system_name: Optional[str] = field(default=None)
    operating_system_version: Optional[str] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    platform_branch_lifecycle_state: Optional[str] = field(default=None)
    platform_branch_name: Optional[str] = field(default=None)
    platform_category: Optional[str] = field(default=None)
    platform_lifecycle_state: Optional[str] = field(default=None)
    platform_name: Optional[str] = field(default=None)
    platform_owner: Optional[str] = field(default=None)
    platform_status: Optional[PlatformStatusEnum] = field(default=None)
    platform_version: Optional[str] = field(default=None)
    programming_languages: Optional[List[PlatformProgrammingLanguage]] = field(default=None)
    solution_stack_name: Optional[str] = field(default=None)
    supported_addon_list: Optional[List[str]] = field(default=None)
    supported_tier_list: Optional[List[str]] = field(default=None)
    
