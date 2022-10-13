from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum(str, Enum):
    REQUIRED_ONLY = "RequiredOnly"
    DEFAULT = "Default"
    ALL = "All"


@dataclass
class ReportingCurrentPackagesInUpdateGroupQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    subscription_type_filter: Optional[ReportingCurrentPackagesInUpdateGroupSubscriptionTypeFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SubscriptionTypeFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingCurrentPackagesInUpdateGroupRequest:
    query_params: ReportingCurrentPackagesInUpdateGroupQueryParams = field(default=None)
    

@dataclass
class ReportingCurrentPackagesInUpdateGroupResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_packages: Optional[List[shared.UpdateSystemModelsPackage]] = field(default=None)
    
