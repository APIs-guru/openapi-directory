from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum(str, Enum):
    REQUIRED_ONLY = "RequiredOnly"
    DEFAULT = "Default"
    ALL = "All"


@dataclass
class ReportingCurrentPackagesInUpdateGroupQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    subscription_type_filter: Optional[ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SubscriptionTypeFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingCurrentPackagesInUpdateGroupRequest:
    query_params: ReportingCurrentPackagesInUpdateGroupQueryParams = field()
    

@dataclass
class ReportingCurrentPackagesInUpdateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_packages: Optional[List[shared.UpdateSystemModelsPackage]] = field(default=None)
    
