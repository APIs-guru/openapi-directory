from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ConfigurationSettingsDescription:
    r"""ConfigurationSettingsDescription
    Describes the settings for a configuration set.
    """
    
    application_name: Optional[str] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_updated: Optional[datetime] = field(default=None)
    deployment_status: Optional[ConfigurationDeploymentStatusEnum] = field(default=None)
    description: Optional[str] = field(default=None)
    environment_name: Optional[str] = field(default=None)
    option_settings: Optional[List[ConfigurationOptionSetting]] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    solution_stack_name: Optional[str] = field(default=None)
    template_name: Optional[str] = field(default=None)
    
