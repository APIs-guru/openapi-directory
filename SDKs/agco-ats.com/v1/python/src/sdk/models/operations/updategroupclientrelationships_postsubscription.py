from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupClientRelationshipsPostSubscriptionRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group_client_relationship: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group_client_relationship1: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group_client_relationship2: Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupClientRelationshipsPostSubscriptionRequest:
    request: UpdateGroupClientRelationshipsPostSubscriptionRequests = field(default=None)
    

@dataclass
class UpdateGroupClientRelationshipsPostSubscriptionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_group_client_relationships_post_subscription_200_application_json_string: Optional[str] = field(default=None)
    update_group_client_relationships_post_subscription_200_application_xml_string: Optional[str] = field(default=None)
    update_group_client_relationships_post_subscription_200_text_json_string: Optional[str] = field(default=None)
    update_group_client_relationships_post_subscription_200_text_xml_string: Optional[str] = field(default=None)
    
