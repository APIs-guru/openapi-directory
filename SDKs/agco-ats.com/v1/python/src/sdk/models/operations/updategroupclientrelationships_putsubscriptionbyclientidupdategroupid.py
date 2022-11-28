from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams:
    active: bool = field(metadata={'query_param': { 'field_name': 'Active', 'style': 'form', 'explode': True }})
    client_id: str = field(metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    update_group_id: str = field(metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDRequest:
    query_params: UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams = field()
    

@dataclass
class UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
