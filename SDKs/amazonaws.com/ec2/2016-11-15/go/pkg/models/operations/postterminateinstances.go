package operations




type PostTerminateInstancesActionEnum string

const (
    PostTerminateInstancesActionEnumTerminateInstances PostTerminateInstancesActionEnum = "TerminateInstances"
)



type PostTerminateInstancesVersionEnum string

const (
    PostTerminateInstancesVersionEnumTwoThousandAndSixteen1115 PostTerminateInstancesVersionEnum = "2016-11-15"
)


type PostTerminateInstancesQueryParams struct {
    Action PostTerminateInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTerminateInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTerminateInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTerminateInstancesRequest struct {
    QueryParams PostTerminateInstancesQueryParams 
    Headers PostTerminateInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTerminateInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

