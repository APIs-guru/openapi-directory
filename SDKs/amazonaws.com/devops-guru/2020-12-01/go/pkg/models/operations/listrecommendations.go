package operations

import (
"openapi/pkg/models/shared")

type ListRecommendationsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListRecommendationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type ListRecommendationsRequestBodyLocaleEnum string

const (
    ListRecommendationsRequestBodyLocaleEnumDeDe ListRecommendationsRequestBodyLocaleEnum = "DE_DE"
ListRecommendationsRequestBodyLocaleEnumEnUs ListRecommendationsRequestBodyLocaleEnum = "EN_US"
ListRecommendationsRequestBodyLocaleEnumEnGb ListRecommendationsRequestBodyLocaleEnum = "EN_GB"
ListRecommendationsRequestBodyLocaleEnumEsEs ListRecommendationsRequestBodyLocaleEnum = "ES_ES"
ListRecommendationsRequestBodyLocaleEnumFrFr ListRecommendationsRequestBodyLocaleEnum = "FR_FR"
ListRecommendationsRequestBodyLocaleEnumItIt ListRecommendationsRequestBodyLocaleEnum = "IT_IT"
ListRecommendationsRequestBodyLocaleEnumJaJp ListRecommendationsRequestBodyLocaleEnum = "JA_JP"
ListRecommendationsRequestBodyLocaleEnumKoKr ListRecommendationsRequestBodyLocaleEnum = "KO_KR"
ListRecommendationsRequestBodyLocaleEnumPtBr ListRecommendationsRequestBodyLocaleEnum = "PT_BR"
ListRecommendationsRequestBodyLocaleEnumZhCn ListRecommendationsRequestBodyLocaleEnum = "ZH_CN"
ListRecommendationsRequestBodyLocaleEnumZhTw ListRecommendationsRequestBodyLocaleEnum = "ZH_TW"
)


type ListRecommendationsRequestBody struct {
    InsightID string `json:"InsightId"`
    Locale *ListRecommendationsRequestBodyLocaleEnum `json:"Locale,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListRecommendationsRequest struct {
    QueryParams ListRecommendationsQueryParams 
    Headers ListRecommendationsHeaders 
    Request ListRecommendationsRequestBody `request:"mediaType=application/json"`
    
}

type ListRecommendationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListRecommendationsResponse *shared.ListRecommendationsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

