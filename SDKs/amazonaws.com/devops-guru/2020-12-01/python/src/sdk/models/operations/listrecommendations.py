from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListRecommendationsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecommendationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class ListRecommendationsRequestBodyLocaleEnum(str, Enum):
    DE_DE = "DE_DE"
    EN_US = "EN_US"
    EN_GB = "EN_GB"
    ES_ES = "ES_ES"
    FR_FR = "FR_FR"
    IT_IT = "IT_IT"
    JA_JP = "JA_JP"
    KO_KR = "KO_KR"
    PT_BR = "PT_BR"
    ZH_CN = "ZH_CN"
    ZH_TW = "ZH_TW"


@dataclass_json
@dataclass
class ListRecommendationsRequestBody:
    insight_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightId' }})
    locale: Optional[ListRecommendationsRequestBodyLocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locale' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    

@dataclass
class ListRecommendationsRequest:
    query_params: ListRecommendationsQueryParams = field(default=None)
    headers: ListRecommendationsHeaders = field(default=None)
    request: ListRecommendationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRecommendationsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_recommendations_response: Optional[shared.ListRecommendationsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
