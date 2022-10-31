package operations




type GetEnableVgwRoutePropagationActionEnum string

const (
    GetEnableVgwRoutePropagationActionEnumEnableVgwRoutePropagation GetEnableVgwRoutePropagationActionEnum = "EnableVgwRoutePropagation"
)



type GetEnableVgwRoutePropagationVersionEnum string

const (
    GetEnableVgwRoutePropagationVersionEnumTwoThousandAndSixteen1115 GetEnableVgwRoutePropagationVersionEnum = "2016-11-15"
)


type GetEnableVgwRoutePropagationQueryParams struct {
    Action GetEnableVgwRoutePropagationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    GatewayID string `queryParam:"style=form,explode=true,name=GatewayId"`
    RouteTableID string `queryParam:"style=form,explode=true,name=RouteTableId"`
    Version GetEnableVgwRoutePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetEnableVgwRoutePropagationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnableVgwRoutePropagationRequest struct {
    QueryParams GetEnableVgwRoutePropagationQueryParams 
    Headers GetEnableVgwRoutePropagationHeaders 
    
}

type GetEnableVgwRoutePropagationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

