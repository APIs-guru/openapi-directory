package operations




type GetDeregisterImageActionEnum string

const (
    GetDeregisterImageActionEnumDeregisterImage GetDeregisterImageActionEnum = "DeregisterImage"
)



type GetDeregisterImageVersionEnum string

const (
    GetDeregisterImageVersionEnumTwoThousandAndSixteen1115 GetDeregisterImageVersionEnum = "2016-11-15"
)


type GetDeregisterImageQueryParams struct {
    Action GetDeregisterImageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    ImageID string `queryParam:"style=form,explode=true,name=ImageId"`
    Version GetDeregisterImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeregisterImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeregisterImageRequest struct {
    QueryParams GetDeregisterImageQueryParams 
    Headers GetDeregisterImageHeaders 
    
}

type GetDeregisterImageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

