from dataclasses import dataclass, field



@dataclass
class PostCqActionsQueryParams:
    authorizable_id: str = field(default=None, metadata={'query_param': { 'field_name': 'authorizableId', 'style': 'form', 'explode': True }})
    changelog: str = field(default=None, metadata={'query_param': { 'field_name': 'changelog', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCqActionsRequest:
    query_params: PostCqActionsQueryParams = field(default=None)
    

@dataclass
class PostCqActionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
