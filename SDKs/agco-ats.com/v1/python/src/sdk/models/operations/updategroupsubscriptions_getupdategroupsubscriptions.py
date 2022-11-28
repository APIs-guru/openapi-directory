from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    package_type_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PackageTypeID', 'style': 'form', 'explode': True }})
    update_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest:
    query_params: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams = field()
    

@dataclass
class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_update_group_subscription_: Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription] = field(default=None)
    
