package operations




type PostEnableVgwRoutePropagationActionEnum string

const (
    PostEnableVgwRoutePropagationActionEnumEnableVgwRoutePropagation PostEnableVgwRoutePropagationActionEnum = "EnableVgwRoutePropagation"
)



type PostEnableVgwRoutePropagationVersionEnum string

const (
    PostEnableVgwRoutePropagationVersionEnumTwoThousandAndSixteen1115 PostEnableVgwRoutePropagationVersionEnum = "2016-11-15"
)


type PostEnableVgwRoutePropagationQueryParams struct {
    Action PostEnableVgwRoutePropagationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostEnableVgwRoutePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostEnableVgwRoutePropagationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostEnableVgwRoutePropagationRequest struct {
    QueryParams PostEnableVgwRoutePropagationQueryParams 
    Headers PostEnableVgwRoutePropagationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostEnableVgwRoutePropagationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

