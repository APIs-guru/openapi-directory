from dataclasses import dataclass, field



@dataclass
class PostCqActionsQueryParams:
    authorizable_id: str = field(metadata={'query_param': { 'field_name': 'authorizableId', 'style': 'form', 'explode': True }})
    changelog: str = field(metadata={'query_param': { 'field_name': 'changelog', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCqActionsRequest:
    query_params: PostCqActionsQueryParams = field()
    

@dataclass
class PostCqActionsResponse:
    content_type: str = field()
    status_code: int = field()
    
