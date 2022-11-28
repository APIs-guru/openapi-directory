from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PriorityPackagesDeletePriorityPackagesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PriorityPackagesDeletePriorityPackagesRequest:
    path_params: PriorityPackagesDeletePriorityPackagesPathParams = field()
    

@dataclass
class PriorityPackagesDeletePriorityPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
