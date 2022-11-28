from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class EnvironmentDescription:
    r"""EnvironmentDescription
    Describes the properties of an environment.
    """
    
    abortable_operation_in_progress: Optional[bool] = field(default=None)
    application_name: Optional[str] = field(default=None)
    cname: Optional[str] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_updated: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    endpoint_url: Optional[str] = field(default=None)
    environment_arn: Optional[str] = field(default=None)
    environment_id: Optional[str] = field(default=None)
    environment_links: Optional[List[EnvironmentLink]] = field(default=None)
    environment_name: Optional[str] = field(default=None)
    health: Optional[EnvironmentHealthEnum] = field(default=None)
    health_status: Optional[EnvironmentHealthStatusEnum] = field(default=None)
    operations_role: Optional[str] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    resources: Optional[EnvironmentResourcesDescription] = field(default=None)
    solution_stack_name: Optional[str] = field(default=None)
    status: Optional[EnvironmentStatusEnum] = field(default=None)
    template_name: Optional[str] = field(default=None)
    tier: Optional[EnvironmentTier] = field(default=None)
    version_label: Optional[str] = field(default=None)
    
