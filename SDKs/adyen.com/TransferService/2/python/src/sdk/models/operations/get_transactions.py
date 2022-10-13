from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetTransactionsQueryParams:
    account_holder_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accountHolderId', 'style': 'form', 'explode': True }})
    balance_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'balanceAccountId', 'style': 'form', 'explode': True }})
    balance_platform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'balancePlatform', 'style': 'form', 'explode': True }})
    created_since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdSince', 'style': 'form', 'explode': True }})
    created_until: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdUntil', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = field(default=None)
    security: GetTransactionsSecurity = field(default=None)
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field(default=None)
    rest_service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transaction_search_response: Optional[Any] = field(default=None)
    
