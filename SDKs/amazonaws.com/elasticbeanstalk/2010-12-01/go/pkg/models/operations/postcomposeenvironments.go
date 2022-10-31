package operations




type PostComposeEnvironmentsActionEnum string

const (
    PostComposeEnvironmentsActionEnumComposeEnvironments PostComposeEnvironmentsActionEnum = "ComposeEnvironments"
)



type PostComposeEnvironmentsVersionEnum string

const (
    PostComposeEnvironmentsVersionEnumTwoThousandAndTen1201 PostComposeEnvironmentsVersionEnum = "2010-12-01"
)


type PostComposeEnvironmentsQueryParams struct {
    Action PostComposeEnvironmentsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostComposeEnvironmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostComposeEnvironmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostComposeEnvironmentsRequest struct {
    QueryParams PostComposeEnvironmentsQueryParams 
    Headers PostComposeEnvironmentsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostComposeEnvironmentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

