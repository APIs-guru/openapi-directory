from dataclasses import dataclass, field



@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams:
    active: bool = field(default=None, metadata={'query_param': { 'field_name': 'Active', 'style': 'form', 'explode': True }})
    client_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    update_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDRequest:
    query_params: UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams = field(default=None)
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
