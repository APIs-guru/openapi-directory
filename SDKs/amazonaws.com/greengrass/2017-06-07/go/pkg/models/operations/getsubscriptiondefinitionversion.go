package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionDefinitionVersionPathParams struct {
    SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
    SubscriptionDefinitionVersionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionVersionId"`
    
}

type GetSubscriptionDefinitionVersionQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetSubscriptionDefinitionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSubscriptionDefinitionVersionRequest struct {
    PathParams GetSubscriptionDefinitionVersionPathParams 
    QueryParams GetSubscriptionDefinitionVersionQueryParams 
    Headers GetSubscriptionDefinitionVersionHeaders 
    
}

type GetSubscriptionDefinitionVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetSubscriptionDefinitionVersionResponse *shared.GetSubscriptionDefinitionVersionResponse 
    StatusCode int64 
    
}

