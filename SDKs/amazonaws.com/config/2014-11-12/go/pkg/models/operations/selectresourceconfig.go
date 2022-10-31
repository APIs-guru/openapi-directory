package operations

import (
"openapi/pkg/models/shared")

type SelectResourceConfigQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type SelectResourceConfigXAmzTargetEnum string

const (
    SelectResourceConfigXAmzTargetEnumStarlingDoveServiceSelectResourceConfig SelectResourceConfigXAmzTargetEnum = "StarlingDoveService.SelectResourceConfig"
)


type SelectResourceConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SelectResourceConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SelectResourceConfigRequest struct {
    QueryParams SelectResourceConfigQueryParams 
    Headers SelectResourceConfigHeaders 
    Request shared.SelectResourceConfigRequest `request:"mediaType=application/json"`
    
}

type SelectResourceConfigResponse struct {
    ContentType string 
    InvalidExpressionException *interface{} 
    InvalidLimitException *interface{} 
    InvalidNextTokenException *interface{} 
    SelectResourceConfigResponse *shared.SelectResourceConfigResponse 
    StatusCode int64 
    
}

