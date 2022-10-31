package operations




type PostStartInstancesActionEnum string

const (
    PostStartInstancesActionEnumStartInstances PostStartInstancesActionEnum = "StartInstances"
)



type PostStartInstancesVersionEnum string

const (
    PostStartInstancesVersionEnumTwoThousandAndSixteen1115 PostStartInstancesVersionEnum = "2016-11-15"
)


type PostStartInstancesQueryParams struct {
    Action PostStartInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostStartInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostStartInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostStartInstancesRequest struct {
    QueryParams PostStartInstancesQueryParams 
    Headers PostStartInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostStartInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

