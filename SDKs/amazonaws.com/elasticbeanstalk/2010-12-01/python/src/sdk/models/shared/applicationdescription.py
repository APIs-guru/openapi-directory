from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ApplicationDescription:
    r"""ApplicationDescription
    Describes the properties of an application.
    """
    
    application_arn: Optional[str] = field(default=None)
    application_name: Optional[str] = field(default=None)
    configuration_templates: Optional[List[str]] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_updated: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    resource_lifecycle_config: Optional[ApplicationResourceLifecycleConfig] = field(default=None)
    versions: Optional[List[str]] = field(default=None)
    
