from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    update_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionsRequest:
    query_params: UpdateGroupClientRelationshipsGetSubscriptionsQueryParams = field(default=None)
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_update_group_client_relationship_: Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
