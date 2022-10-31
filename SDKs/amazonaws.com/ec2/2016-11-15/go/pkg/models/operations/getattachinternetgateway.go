package operations




type GetAttachInternetGatewayActionEnum string

const (
    GetAttachInternetGatewayActionEnumAttachInternetGateway GetAttachInternetGatewayActionEnum = "AttachInternetGateway"
)



type GetAttachInternetGatewayVersionEnum string

const (
    GetAttachInternetGatewayVersionEnumTwoThousandAndSixteen1115 GetAttachInternetGatewayVersionEnum = "2016-11-15"
)


type GetAttachInternetGatewayQueryParams struct {
    Action GetAttachInternetGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    InternetGatewayID string `queryParam:"style=form,explode=true,name=InternetGatewayId"`
    Version GetAttachInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcID string `queryParam:"style=form,explode=true,name=VpcId"`
    
}

type GetAttachInternetGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAttachInternetGatewayRequest struct {
    QueryParams GetAttachInternetGatewayQueryParams 
    Headers GetAttachInternetGatewayHeaders 
    
}

type GetAttachInternetGatewayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

