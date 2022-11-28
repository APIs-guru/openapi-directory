from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionPathParams:
    relationship_id: str = field(metadata={'path_param': { 'field_name': 'RelationshipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group_client_relationship: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group_client_relationship1: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group_client_relationship2: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionRequest:
    path_params: UpdateGroupClientRelationshipsPutSubscriptionPathParams = field()
    request: UpdateGroupClientRelationshipsPutSubscriptionRequests = field()
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
