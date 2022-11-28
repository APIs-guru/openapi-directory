from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionPathParams:
    relationship_id: str = field(metadata={'path_param': { 'field_name': 'RelationshipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionRequest:
    path_params: UpdateGroupClientRelationshipsGetSubscriptionPathParams = field()
    

@dataclass
class UpdateGroupClientRelationshipsGetSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_update_group_client_relationship: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None)
    
