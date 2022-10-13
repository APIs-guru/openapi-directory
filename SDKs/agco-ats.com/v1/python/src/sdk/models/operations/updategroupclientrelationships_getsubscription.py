from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionPathParams:
    relationship_id: str = field(default=None, metadata={'path_param': { 'field_name': 'RelationshipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionRequest:
    path_params: UpdateGroupClientRelationshipsGetSubscriptionPathParams = field(default=None)
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_update_group_client_relationship: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None)
    
